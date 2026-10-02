export const doctors = [
  { id: '1', name: 'Dr. Rahul Sharma', speciality: 'Cardiology', experience: '15 Years', availableTime: '10:00 AM - 02:00 PM' },
  { id: '2', name: 'Dr. Sneha Patel', speciality: 'Gynecology', experience: '10 Years', availableTime: '11:00 AM - 04:00 PM' },
  { id: '3', name: 'Dr. Amit Kumar', speciality: 'Orthopedics', experience: '12 Years', availableTime: '09:00 AM - 01:00 PM' },
  { id: '4', name: 'Dr. Priya Singh', speciality: 'Pediatrics', experience: '8 Years', availableTime: '02:00 PM - 06:00 PM' },
  { id: '5', name: 'Dr. Rajesh Verma', speciality: 'General Medicine', experience: '20 Years', availableTime: '10:00 AM - 05:00 PM' },
];

export const specialities = [
  'General Medicine',
  'Cardiology',
  'Orthopedics',
  'Gynecology',
  'Pediatrics',
  'General Surgery',
  'ENT',
  'Dermatology',
  'Neurology',
  'Urology',
];

export const appointments = [
  {
    id: '1',
    patientName: 'Vikas Singh',
    age: '45',
    gender: 'Male',
    doctor: 'Dr. Rahul Sharma',
    department: 'Cardiology',
    date: new Date().toISOString().split('T')[0],
    time: '10:30 AM',
    mobile: '9876543210',
    status: 'Confirmed'
  },
  {
    id: '2',
    patientName: 'Anjali Gupta',
    age: '28',
    gender: 'Female',
    doctor: 'Dr. Sneha Patel',
    department: 'Gynecology',
    date: new Date().toISOString().split('T')[0],
    time: '11:30 AM',
    mobile: '9876543211',
    status: 'Pending'
  },
  {
    id: '3',
    patientName: 'Rohan Das',
    age: '35',
    gender: 'Male',
    doctor: 'Dr. Rajesh Verma',
    department: 'General Medicine',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    time: '10:00 AM',
    mobile: '9876543212',
    status: 'Confirmed'
  }
];

export const patients = [
  { id: '1', name: 'Vikas Singh', age: '45', gender: 'Male', mobile: '9876543210', lastAppointment: '2023-10-01', totalAppointments: 3 },
  { id: '2', name: 'Anjali Gupta', age: '28', gender: 'Female', mobile: '9876543211', lastAppointment: '2023-09-15', totalAppointments: 1 },
];
