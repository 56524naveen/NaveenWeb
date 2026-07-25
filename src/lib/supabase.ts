export const SUPABASE_URL = import.meta.env?.VITE_SUPABASE_URL || 'https://dtmajcsbgutvehvzhluw.supabase.co';
export const SUPABASE_ANON_KEY = import.meta.env?.VITE_SUPABASE_ANON_KEY || 'sb_publishable_Z-th_5VIBBUJwfIJIEnS_Q_GwyI9xba';

export interface AppointmentData {
  id?: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  appointment_date: string;
  appointment_time: string;
  notes?: string;
  created_at?: string;
}

/**
 * Saves an appointment record into Supabase backend table `appointments`.
 */
export async function createAppointment(appointment: AppointmentData): Promise<{ success: boolean; data?: any; error?: string }> {
  try {
    const endpoint = `${SUPABASE_URL}/rest/v1/appointments`;
    
    const payload = {
      name: appointment.name.trim(),
      email: appointment.email.trim(),
      phone: appointment.phone.trim(),
      service: appointment.service || 'General Consultation',
      appointment_date: appointment.appointment_date,
      appointment_time: appointment.appointment_time,
      notes: appointment.notes ? appointment.notes.trim() : '',
      created_at: new Date().toISOString()
    };

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Prefer': 'return=representation'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errText = await response.text();
      let parsedError = errText;
      try {
        const errJson = JSON.parse(errText);
        parsedError = errJson.message || errJson.hint || errJson.details || errText;
      } catch (e) {
        // Keep raw text
      }
      return { success: false, error: parsedError || `HTTP error ${response.status}` };
    }

    const data = await response.json();
    return { success: true, data: data[0] || payload };
  } catch (err: any) {
    return { 
      success: false, 
      error: err?.message || 'Network error occurred while connecting to Supabase backend.' 
    };
  }
}

/**
 * Fetches existing appointments from Supabase table `appointments`.
 */
export async function getAppointments(): Promise<{ success: boolean; data?: AppointmentData[]; error?: string }> {
  try {
    const endpoint = `${SUPABASE_URL}/rest/v1/appointments?select=*&order=created_at.desc`;
    
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      const errText = await response.text();
      return { success: false, error: errText };
    }

    const data = await response.json();
    return { success: true, data };
  } catch (err: any) {
    return { success: false, error: err?.message || 'Failed to fetch appointments.' };
  }
}
