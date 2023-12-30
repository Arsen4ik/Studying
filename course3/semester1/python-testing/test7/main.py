# 1 task


# import pytest
#
# async def async_function():
#     return "Hello, World!"
#
# @pytest.mark.asyncio
# async def test_async_function(event_loop):
#     result = await async_function()
#     assert result == "Hello, World!"


# 2 task


# import pytest
#
# async def async_function():
#     raise Exception("This is an expected exception")
#
# @pytest.mark.asyncio
# async def test_async_function_exception(event_loop):
#     with pytest.raises(Exception) as exc_info:
#         await async_function()
#
#     assert str(exc_info.value) == "This is an expected exception"


# 3 task


# import pytest
# import aiohttp
#
# async def fetch_data():
#     async with aiohttp.ClientSession() as session:
#         async with session.get('https://dog.ceo/api/breeds/list/all') as response:
#             return await response.json()
#
# @pytest.mark.asyncio
# async def test_fetch_data(event_loop):
#     data = await fetch_data()
#     assert data['message']['australian'][0] == 'kelpie'
#     # assert data['message']['australian'][1] == 'kelpie'


# 4 task


# import sqlite3
#
# try:
#     sqlite_connection = sqlite3.connect('fun.db')
#     cursor = sqlite_connection.cursor()
#     print("БД открыта")
#
#
#     create_fun_table_query = '''
#     CREATE TABLE IF NOT EXISTS Fun (
#         ID INTEGER PRIMARY KEY,
#         Info Text
#     );
#     '''
#     cursor.execute(create_fun_table_query)
#
#     sqlite_connection.commit()
#     cursor.close()
#
# except sqlite3.Error as error:
#     print("Ошибка:", error)
# finally:
#     if sqlite_connection:
#         sqlite_connection.close()
#         print("Соединение закрыто")


# 5 task


# import pytest
# import asyncio
#
# async def async_function():
#     await asyncio.sleep(1)
#     return "gg lol"
#
# def run_async_function():
#     loop = asyncio.new_event_loop()
#     asyncio.set_event_loop(loop)
#     result = loop.run_until_complete(async_function())
#     loop.close()
#     return result
#
# def test_run_async_function(event_loop):
#     result = run_async_function()
#     assert result == "gg lol"
