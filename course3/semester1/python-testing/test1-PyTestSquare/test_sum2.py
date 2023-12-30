from main import sum2, one
import pytest

# def test_sum2():
#     assert sum2(15, 8) == 23;
#
#
# @pytest.mark.parametrize('a, b, result',
#                          [
#                             (5,36,3),
#                             (10,5,50)
#                         ])

# def test_one(a, b, result):
#     assert a + b == result;

# def test_two(a, b, result):
#     assert a > result or b > result;



@pytest.fixture()
def func():
    result = []
    for num in range(1,10):
        if num % 3 == 0:
            result.append(num)
    return result



def test_one(func):
    func_test = func
    assert one(func_test) == [9,36,81]