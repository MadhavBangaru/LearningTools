import mysql.connector

class MySQLConnector:
    def __init__(self, host, user, password, database):
        self.host = host
        self.user = user
        self.password = password
        self.database = database
        self.connection = None

    def connect(self):
        try:
            self.connection = mysql.connector.connect(
                host=self.host,
                user=self.user,
                password=self.password,
                database=self.database
            )
            print("Connected to MySQL database successfully!")
        except mysql.connector.Error as error:
            print(f"Error connecting to MySQL database: {error}")

    def disconnect(self):
        if self.connection:
            self.connection.close()
            print("Disconnected from MySQL database.")

    def execute_query(self, query):
        cursor = self.connection.cursor()
        try:
            cursor.execute(query)
            result = cursor.fetchall()
            #self.connection.commit()
            #print(f"Query executed successfully! {result}")
            return result
        except mysql.connector.Error as error:
            print(f"Error executing query: {error}")
        finally:
            cursor.close()

# # Create an instance of the MySQLConnector class
# connector = MySQLConnector(host="127.0.0.1", user="root", password="root", database="people")

# # Connect to the MySQL server
# connector.connect()

# # Execute a query
# query = "SELECT * FROM sample;"
# connector.execute_query(query)

# # Disconnect from the MySQL server
# connector.disconnect()
