import Route from '@ember/routing/route';
import type DashboardController from 'salon-dashboard-demo/controllers/dashboard';

export interface Appointment {
  id: number;
  clientName: string;
  time: string;
  service: string;
  completed: boolean;
}

export interface DashboardModel {
  salonName: string;
  bookingsToday: number;
  appointments: Appointment[];
}

export default class DashboardRoute extends Route {
  model(): DashboardModel {
    return {
      salonName: 'Phorest Training Salon',
      bookingsToday: 8,
      appointments: [
        {
          id: 1,
          clientName: 'Alice Johnson',
          time: '09:00',
          service: 'Cut & Finish',
          completed: false
        },
        {
          id: 2,
          clientName: 'Liam Smith',
          time: '10:15',
          service: 'Deluxe Colour',
          completed: false
        },
        {
          id: 3,
          clientName: 'Noah Williams',
          time: '11:45',
          service: 'Beard Trim',
          completed: true
        },
        {
          id: 4,
          clientName: 'Emma Davis',
          time: '13:30',
          service: 'Highlights',
          completed: false
        },
        {
          id: 5,
          clientName: 'Olivia Brown',
          time: '15:00',
          service: 'Hydrating Treatment',
          completed: false
        }
      ]
    };
  }

  setupController(controller: DashboardController, model: DashboardModel): void {
    super.setupController(controller, model);
    controller.appointments = model.appointments;
  }
}
