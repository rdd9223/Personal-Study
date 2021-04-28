# 1mm종이를 몇 번 접어야지 50m(50000mm)가 되는지 구하는 프로그램

# 종이 초기값
thickness = 1
# 접은 횟수 초기값
count = 0

# 반복문 이용
while True:
    thickness *= 2  # 반으로 접는 연산
    count += 1  # 접은 횟수 증가 연산

    # 종이의 두께가 50000을 넘으면 반복문 종료
    if thickness > 50000:
        break

# 종이의 두께와 접은 횟수 출력
print(f"두께: {thickness}mm")
print(f"횟수: {count}회")
