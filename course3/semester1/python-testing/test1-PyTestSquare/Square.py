# class Rectangle(Figure):
#     def __init__(self, side_a, side_b):
#         if side_a <= 0 or side_b <= 0:
#             raise ValueError(f'Can not create Rectangle')
#         self.side_a = side_a
#         self.side_b = side_b
#         self.name = 'Rectangle'
#
#     def get_area(self):
#         return self.side_a * self.side_b
#
#     def get_perimeter(self):
#         return 2 * (self.side_a + self.side_b)
# @pytest.mark.parametrize('side_a, side_b, perimeter, area',
#                          [
#                              (4, 5, 18, 20),
#                              (10, 20, 60, 200),
#                              (7, 5, 24, 35),
#                          ])
# def test_rectangle(side_a, side_b, perimeter, area):
#     r = Rectangle(side_a, side_b)
#     assert r.name == 'Rectangle'
#     assert r.get_area() == area
#     assert r.get_perimeter() == perimeter
#
#
# @pytest.mark.parametrize('side_a, side_b, perimeter, area',
#                          [
#                              (-4, 5, 2, 20),
#                              (0, 20, 40, 0),
#                          ])
# def test_rectangle_negative(side_a, side_b, perimeter, area):
#     with pytest.raises(ValueError):
#         Rectangle(side_a, side_b)


import pytest


class Square():
    def __init__(self, side_a):
            if side_a <= 0:
                raise ValueError(f'Can not create Square')
            self.side_a = side_a
            self.name = 'Square'

    def get_area(self):
        return self.side_a * self.side_a

    def get_perimeter(self):
        return 4 * self.side_a



@pytest.mark.parametrize('side_a, perimeter, area',
                         [
                             (4, 16, 16),
                             (10, 40, 100),
                             (7, 28, 49),
                         ])
def test_square(side_a, perimeter, area):
    r = Square(side_a)
    assert r.name == 'Square'
    assert r.get_area() == area
    assert r.get_perimeter() == perimeter


@pytest.mark.parametrize('side_a, perimeter, area',
                         [
                             (-4, 2, 20),
                             (0, 40, 0),
                         ])
def test_square_negative(side_a, perimeter, area):
    with pytest.raises(ValueError):
        Square(side_a)


