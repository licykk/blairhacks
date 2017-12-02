sum = 1
n = 1
1000.times do
  if n%3 == 0
    sum = sum * n
  elsif n%5 == 0
    sum = sum * n
  end
  puts sum
  n = n + 1
end
