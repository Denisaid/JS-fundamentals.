function spriceOfFlow(yield) {
  let days = 0;
  let cosumeFromCrewPerDay = 26;
  let totalYiueld = 0;
  while (yield >= 100) {
    days++;
    totalYiueld += yield - cosumeFromCrewPerDay;
    yield -= 10;
  }
  if (totalYiueld >= cosumeFromCrewPerDay) {
    totalYiueld -= cosumeFromCrewPerDay;
  }

  console.log(days);
  console.log(totalYiueld);
}

spriceOfFlow(111);
