<!DOCTYPE html>
<html>
<head>
    <title>Hayden's Garage Booking</title>
</head>
<body>
    <h1>Booking Confirmation</h1>
  
    <p>Thank you for booking at Hayden's Garage. Your details are as follows:</p>

    <ul>
      <li><strong>Name:</strong> {{ $bookingData->name }}</li>
      <li><strong>Email:</strong> {{ $bookingData->email }}</li>
      <li><strong>Phone Number:</strong> {{ $bookingData->phone_number }}</li>
      <li><strong>Vehicle Make:</strong> {{ $bookingData->vehicle_make }}</li>
      <li><strong>Vehicle Model:</strong> {{ $bookingData->vehicle_model }}</li>
      <li><strong>Date and Time of booking:</strong> {{ $bookingData->date_and_time }}</li>
    </ul>
</body>
</html>