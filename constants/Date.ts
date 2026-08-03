export function formatDate(date: Date): string {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

export function getToday() {
  const today = new Date();

  return {
    checkIn: formatDate(today),
    checkOut: formatDate(today),
  };
}

export function getYesterday() {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  return {
    checkIn: formatDate(yesterday),
    checkOut: formatDate(yesterday),
  };
}

export function getThisWeek() {
  const today = new Date();

  const firstDay = new Date(today);
  firstDay.setDate(today.getDate() - today.getDay());

  const lastDay = new Date(firstDay);
  lastDay.setDate(firstDay.getDate() + 6);

  return {
    checkIn: formatDate(firstDay),
    checkOut: formatDate(lastDay),
  };
}

export function getLastWeek() {
  const today = new Date();

  const firstDay = new Date(today);
  firstDay.setDate(today.getDate() - today.getDay() - 7);

  const lastDay = new Date(firstDay);
  lastDay.setDate(firstDay.getDate() + 6);

  return {
    checkIn: formatDate(firstDay),
    checkOut: formatDate(lastDay),
  };
}

export function getThisMonth() {
  const today = new Date();

  const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
  const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);

  return {
    checkIn: formatDate(firstDay),
    checkOut: formatDate(lastDay),
  };
}

export function getLastMonth() {
  const today = new Date();

  const firstDay = new Date(today.getFullYear(), today.getMonth() - 1, 1);
  const lastDay = new Date(today.getFullYear(), today.getMonth(), 0);

  return {
    checkIn: formatDate(firstDay),
    checkOut: formatDate(lastDay),
  };
}

