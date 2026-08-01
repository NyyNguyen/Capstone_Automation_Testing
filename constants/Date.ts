export function getBookingDate(checkOutSet: number) {
  const checkIn = new Date();

  const checkOut = new Date();
  checkOut.setDate(checkOut.getDate() + checkOutSet);

  return {
    checkIn: checkIn.getDate().toString(),
    checkOut: checkOut.getDate().toString(),
  };
}