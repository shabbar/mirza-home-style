import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    console.log("Received contact form submission:", formData);

    // Send confirmation email to customer
    const customerEmailResponse = await resend.emails.send({
      from: "SA Mirza Enterprises <onboarding@resend.dev>",
      to: [formData.email],
      subject: "Thank You for Contacting SA Mirza Enterprises",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1a365d;">Thank You for Reaching Out!</h1>
          <p>Dear ${formData.firstName} ${formData.lastName},</p>
          <p>We have received your inquiry and our team will get back to you within 24-48 hours.</p>
          
          <div style="background-color: #f7fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1a365d; margin-top: 0;">Your Submission Details:</h3>
            <p><strong>Project Type:</strong> ${formData.projectType}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Message:</strong><br/>${formData.message}</p>
          </div>
          
          <p>For urgent matters, you can reach us at:</p>
          <ul>
            <li>Phone: +92 321 5700 004</li>
            <li>Email: projects@samenterprizes.biz</li>
            <li>Office: Plot No.243, Street No.8, Sector I-9/3, Islamabad</li>
          </ul>
          
          <p style="margin-top: 30px;">Best regards,<br/>
          <strong>SA Mirza Enterprises Team</strong></p>
        </div>
      `,
    });

    console.log("Customer confirmation email sent:", customerEmailResponse);

    // Send notification email to business
    const businessEmailResponse = await resend.emails.send({
      from: "SA Mirza Contact Form <onboarding@resend.dev>",
      to: ["projects@samenterprizes.biz"],
      subject: `New Contact Form Submission - ${formData.projectType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1a365d;">New Contact Form Submission</h1>
          
          <div style="background-color: #f7fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1a365d; margin-top: 0;">Contact Information:</h3>
            <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Project Type:</strong> ${formData.projectType}</p>
          </div>
          
          <div style="background-color: #fff5f5; padding: 20px; border-radius: 8px; border-left: 4px solid #c8984c;">
            <h3 style="color: #1a365d; margin-top: 0;">Message:</h3>
            <p>${formData.message}</p>
          </div>
          
          <p style="margin-top: 30px; color: #718096; font-size: 14px;">
            Received at: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Karachi' })} PKT
          </p>
        </div>
      `,
    });

    console.log("Business notification email sent:", businessEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Emails sent successfully" 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        success: false 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);
