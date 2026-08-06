import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const contactSchema = z.object({
  name: z.string().min(1, "Le nom est requis"),
  email: z.string().email("Email invalide"),
  phone: z.string().optional().nullable(),
  message: z.string().min(1, "Le message est requis"),
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