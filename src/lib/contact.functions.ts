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
    // Only save to database here. 
    // Web3Forms is now handled directly on the client to avoid 403 Forbidden errors on their Free tier.
    const { error } = await supabase
      .from("contact_submissions")
      .insert([data]);

    if (error) {
      console.error("Error saving to database:", error);
    }

    return { success: true };
  });