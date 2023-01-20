import { object, string } from 'yup';

const contactSchema = object({
    email: string().email("Geçerli bir email adresi girin...").required("Bu alan zorunludur."),
    password: string().required("Bu alan zorunludur."),
    message: string().min(5, "Minimum 5 karakter giriniz").required("Bu alan zorunludur.")
});

export default contactSchema