import faker from "faker";
import { TableData } from "@/types/AppTypes";

export const generateFakeData = (count: number): TableData[] => {
  const data: TableData[] = [];

  for (let i = 0; i < count; i++) {
    const id = faker.random.uuid();
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();
    const city = faker.address.city();
    const registeredAt = faker.date.past();

    const tableData = {
      id,
      firstName,
      lastName,
      email,
      city,
      registeredAt,
      fullName: `${firstName} ${lastName}`,
      dsr: calculateDaysSinceRegistered(registeredAt),
    };

    data.push(tableData);
  }

  return data;
};

const calculateDaysSinceRegistered = (registeredDate: Date) => {
  const today = new Date();
  const diffTime = Math.abs(today.getTime() - registeredDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};
