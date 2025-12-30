import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import type { Appointment, DashboardModel } from 'salon-dashboard-demo/routes/dashboard';

export default class DashboardController extends Controller {
  declare model: DashboardModel;

  @tracked appointments: Appointment[] = (this.model?.appointments ?? []).map((appointment) => ({
    ...appointment
  }));

  @action
  toggleCompleted(id: number): void {
    this.appointments = this.appointments.map((appointment) =>
      appointment.id === id
        ? { ...appointment, completed: !appointment.completed }
        : appointment
    );
  }
}
