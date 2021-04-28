# 601602089 강영우
# 태어난 해를 입력받고 해당 띠를 출력하는 프로그램

import sys  # 프로그램 강제 종료를 위한 sys라이브러리 import

# 동물 띠 나열
animals = ["원숭이", "닭", "개", "돼지", "쥐", "소", "호랑이", "토끼", "용", "뱀", "말", "양"]

# 윤달, 각 달의 최대 일수를 계산하는 함수
def calculateMaximumDay(year, month):
    """해당 월 최대 일 일수 계산하는 함수"""
    if month in [1, 3, 5, 7, 8, 10, 12]:
        return 31
    elif month in [4, 6, 9, 11]:
        return 30
    elif month == 2 and year % 4 == 0:
        return 29
    else:
        return 28


# 사용자의 출생 년도, 월, 일을 입력받아 정수형으로 저장
birthYear = int(input("태어난 해를 입력해 주세요?"))
birthMonth = int(input("태어난 월을 입력해 주세요?"))
birthDay = int(input("태어난 일을 입력해 주세요?"))

# 만약 월, 일이 유효하지 않다면 오류메세지 출력 후 프로그램 종료
if (
    birthMonth > 12
    or birthMonth < 1
    or birthDay < 0
    or birthDay > calculateMaximumDay(birthYear, birthMonth)
):
    print("생일을 올바르게 입력해 주세요")
    sys.exit()

# 사용자의 출생년도를 12로 나눠서 나온 결과에 해당하는 띠 출력
print(f"{animals[birthYear % 12]}띠")