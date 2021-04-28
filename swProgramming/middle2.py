# 60162089 강영우
# 19단 표를 출력하는 프로그램

# 라벨 작성
print("***" * 25, "19단표", "***" * 25)

# 초반 빈칸 추가
print("", end="\t|")
# 반복문을 이용하여 열 숫자 1부터 19까지 인덱스 추가
for i in range(1, 20):
    print(i, end="\t")
# 한 줄 띄기
print()
# 구분선 입력
for i in range(1, 20):
    print("--------", end="")
# 한 줄 띄기
print()

# 반복문을 이용하여 1부터 19까지 반복
for i in range(1, 20):
    # 해당 행 숫자 기입
    print(i, end="\t|")
    # 반복문을 이용하여 1부터 19까지 i와 곱한 결과를 작성
    for j in range(1, 20):
        print(i * j, end="\t")
    # 다음 행으로 이동
    print()
