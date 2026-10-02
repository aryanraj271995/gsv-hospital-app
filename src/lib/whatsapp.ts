export const generateWhatsAppMessage = (data: any) => {
  const number = process.env.NEXT_PUBLIC_HOSPITAL_WHATSAPP_NUMBER || '918292027818';
  
  const text = `*Hello GSV Multi-Speciality Hospital,*
I would like to book a doctor appointment.

*Patient Details:*
Patient Name: ${data.patientName}
Age: ${data.age}
Gender: ${data.gender}
Address: ${data.address}

*Appointment Details:*
Department: ${data.department}
Doctor: ${data.doctorName}
Date: ${data.appointmentDate}
Time: ${data.appointmentTime}

*Contact Details:*
Mobile: ${data.mobile}
Alternate Number: ${data.alternateMobile || 'N/A'}

*Appointment By:*
Relation: ${data.relation}
Name: ${data.appointmentBy}

Please confirm my appointment.
Thank you.`;

  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${number}?text=${encodedText}`;
};
