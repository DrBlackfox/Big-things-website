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
    // We insert into the database. 
    // RLS allows anyone to insert.
    const { error } = await supabase
      .from("contact_submissions")
      .insert([data]);

    if (error) {
      console.error("Error submitting contact form:", error);
      throw new Error("Failed to submit contact form");
    }

    return { success: true };
  });
