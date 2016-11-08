update jobs set
  job_number = $1,
  time = $2,
  checked_in = $3,
  final_test = $4,
  recharged = $5,
  counter = $6,
  customer_approval = $7,
  archived = $8,
  escalated = $9,
  creation_date = $10
  where job_number = $1;
