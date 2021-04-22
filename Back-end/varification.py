def vertification(total_job_count, fake_job_count):
    VERTIFICATION_LIMIT = 70
    passing_perc = (fake_job_count/total_job_count) * 100
    if passing_perc > VERTIFICATION_LIMIT:
        return "Verified Company"
    else:
        return "Not a verified company"


print(vertification(40, 30))
print(vertification(80, 20))