import { JOBTYPES } from "@/constants";
import { z } from "zod";

export const jobFormSchema = z.object({
  roles: z
    .string({ required_error: "Job Title is required" })
    .min(3, { message: "Job Title must be at least 3 characters" }),
    jobType: z.enum(JOBTYPES,{required_error: "Job Type is required"}),
    salaryForm: z.string({required_error: "Salary From is required"}),
    salaryTo: z.string({required_error: "Salary To is required"}),
    categoryId: z.string({required_error: "Category is required"}),
    requiredSkills: z.string().array().nonempty({message: "Required Skills is required"}),
    jobDescription: z.string({required_error: "Job Description is required"}),
});
