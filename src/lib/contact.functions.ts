import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
});

export const submitContactForm = createServerFn({ method: "POST" })
  .inputValidator((data) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    // 1. Insert into database for records
    const { error: dbError } = await supabase
      .from("contact_submissions")
      .insert([data]);

    if (dbError) {
      console.error("Error saving to database:", dbError);
    }

    // 2. Send to Web3Forms
    const ACCESS_KEY = "e43377d9-fadd-412b-b588-952a0dab171e";
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
          subject: `Nouveau message de contact de ${data.name}`,
          from_name: "Big Things Website",
        }),
      });

      const result = await response.json();
      if (!result.success) {
        console.error("Web3Forms error:", result);
      }
    } catch (error) {
      console.error("Error sending to Web3Forms:", error);
    }

    return { success: true };
  });