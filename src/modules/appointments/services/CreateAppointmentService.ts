import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import AppError from '../../../shared/errors/AppError';
import Appointment from '../entities/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

//  recebimento das informacoes
//  tratativa de erros/excecoes
//  acesso ao repositorio

interface RequestDTO {
  provider_id: string;
  date: Date;
}

// dependency inversion (SOLID) Single responsibility principle - Dependency Inversion Principle

class CreateAppointmentService {
  public async execute({
    date,
    provider_id,
  }: RequestDTO): Promise<Appointment> {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);

    const appointmentDate = startOfHour(date); // regra de negocio

    const findAppointmentInSameDate = await appointmentsRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentInSameDate) {
      throw new AppError('This appointment is already booked');
    }

    const appointment = appointmentsRepository.create({
      provider_id,
      date: appointmentDate,
    });
    await appointmentsRepository.save(appointment);

    return appointment;
  }
}

export default CreateAppointmentService;
