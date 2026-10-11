import { z } from "zod";

// Shared validators
export const emailOrPhoneValidator = z
  .string()
  .min(1, "البريد الإلكتروني أو رقم الجوال مطلوب")
  .refine((value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(05|5)([0-9]{8})$/;
    return emailRegex.test(value) || phoneRegex.test(value);
  }, "يرجى إدخال بريد إلكتروني صحيح أو رقم جوال سعودي");

export const passwordValidator = z
  .string()
  .min(8, "كلمة المرور يجب أن تكون 8 أحرف على الأقل")
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
    "يجب أن تحتوي على حرف كبير وحرف صغير ورقم",
  );

export const fullNameValidator = z
  .string()
  .min(2, "الاسم يجب أن يكون حرفين على الأقل")
  .max(100, "الاسم طويل جداً");

// Login Schema
export const loginSchema = z.object({
  emailOrPhone: emailOrPhoneValidator,
  password: z.string().min(1, "كلمة المرور مطلوبة"),
  rememberMe: z.boolean().optional(),
});

export type LoginFormData = z.infer<typeof loginSchema>;

// Signup Schema
export const signupSchema = z
  .object({
    fullName: fullNameValidator,
    emailOrPhone: emailOrPhoneValidator,
    password: passwordValidator,
    confirmPassword: z.string().min(1, "تأكيد كلمة المرور مطلوب"),
    agreeToTerms: z.boolean().refine((val) => val === true, {
      message: "يجب الموافقة على الشروط والأحكام",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "كلمة المرور غير متطابقة مع كلمة المرور المدخلة أعلاه.",
    path: ["confirmPassword"],
  });

export type SignupFormData = z.infer<typeof signupSchema>;
