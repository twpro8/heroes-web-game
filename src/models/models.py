from sqlalchemy import MetaData, Table, Column, Integer, String, Boolean, TIMESTAMP

metadata = MetaData()


user = Table(
    'user',
    metadata,
    Column('id', Integer, primary_key=True),
    Column('username', String(255)),
    Column('email', String(255)),
    Column('password', String(255)),
)