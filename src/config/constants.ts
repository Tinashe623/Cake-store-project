export const WHATSAPP_PHONE_NUMBER = '263785826233'

export const getWhatsAppUrl = (message: string) =>
    `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`
