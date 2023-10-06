//id_user = 3
const UserTravelService = require("../services/UserTravelService");
const UserTravel = require("../models/userTravel");

const TcService = require("../services/TcService");
const Tc = require("../models/tc");

const TravelScoreService = require("../services/TravelScoreService");
const TravelScore = require("../models/Travelscore");

const TravelService = require("../services/TravelService");
const Travel = require("../models/Travel");

const UserService = require("../services/UserService");
const User = require("../models/User");
const mysqlConnection = require("../config/db");

beforeAll(async () => {
  // console.log('Clean data tests');

  mysqlConnection.query("CALL borrarycrear();", function (err, result) {
    if (err) console.error(err);
    // console.log("Database cleaned"+result);
  });

  mysqlConnection.query(
    "INSERT INTO users (username, password, rol) VALUES('cliente@gmail.com','$2b$10$0wBjt7Wmz8.EEsOigIYrwuixhaFKzYc99v2xwAHdYWQXbsOhplL.G','usser');",
    function (insertErr, insertResult) {}
  );
  mysqlConnection.query(
    "INSERT INTO users (username, password, rol) VALUES('company@gmail.com','$2b$10$aFUfyJ4QYznU2WY8oZS.9uwe5Inmqqi5k8P7l2tnLq0SFZ1RHlig.','company');",
    function (insertErr, insertResult) {}
  );
  mysqlConnection.query(
    "INSERT INTO travels (id_empresa, descripcion, punto_de_partida, punto_de_destino, precio, capacidad, categoria) VALUES ('company@gmail.com', 'viaje empresa2', 'solola', 'guatemala', 100, 4, 'extraurbano');",
    function (insertErr, insertResult) {}
  );
});

afterAll(async () => {
  await mysqlConnection.destroy();
});

///                      PRUEBAS

describe("User Service", () => {
  it("Creación de boleto para un usuario", async () => {
    // Arrange
    const id_travel = "123";
    const id_user = "456";
    const estado = "completed";

    // Act
    const result = await UserTravelService.addTravelForUser(
      id_travel,
      id_user,
      estado
    );

    // Assert
    expect(result.id_travel).toBe(id_travel);
    expect(result.id_user).toBe(id_user);
    expect(result.estado).toBe(estado);
  });
});

describe("Travel Service", () => {
  it("Obtener lista de viajes disponibles", async () => {
    const result = await TravelService.getAllTravels();

    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBeGreaterThan(0);
  });

  it("ERROR - No hay viajes", async () => {
    const result = await TravelService.getAllTravels();

    !expect(result).not.toEqual([]);
  });
});

describe("User Travel Service", () => {
  it("Crear nuevo viaje para el usuario", async () => {
    // Arrange
    const id_travel = 1;
    const id_user = 1;
    const estado = "active";

    // Act
    const result = await UserTravelService.addTravelForUser(
      id_travel,
      id_user,
      estado
    );

    // Assert
    expect(result).toBeDefined();
    expect(result.id_travel).toBe(id_travel);
    expect(result.id_user).toBe(id_user);
    expect(result.estado).toBe(estado);
  });
  it('Obtener el viaje recientemente registrado', async () => {
    const id_travel = 1;
    const id_user = 1;
    const estado = 'active';

    const newUserTravel = await UserTravelService.addTravelForUser(id_travel, id_user, estado);

    expect(newUserTravel).toBeDefined();
    expect(newUserTravel.id_travel).toBe(id_travel);
    expect(newUserTravel.id_user).toBe(id_user);
    expect(newUserTravel.estado).toBe(estado);
  });

  it("Obtener lista de viajes por usuario", async () => {
    const id_user = 1;
    const userTravels = await UserTravelService.getUserTravels(id_user);
    expect(Array.isArray(userTravels)).toBe(true);
  });

  it('Modificar el estado del viaje', async () => {
    // Arrange
    const id_travel = 1;
    const id_user = 1;
    const newEstado = 'completed';

    // Act
    const updatedUserTravel = await UserTravelService.updateTravelStatus(id_travel, id_user, newEstado);

    // Assert
    expect(updatedUserTravel.estado).toBe(newEstado);
  });

  it('Cancelar viaje', async () => {
    // Arrange
    const id_travel = 1;
    const id_user = 1;
    const newEstado = 'canceled';

    // Act
    const updatedUserTravel = await UserTravelService.updateTravelStatus(id_travel, id_user, newEstado);

    // Assert
    expect(updatedUserTravel.estado).toBe(newEstado);
  });
});

describe("Travel Score Service", () => {
  it('Puntuar viajes', async () => {
    // Arrange
    const idTravel = 1;
    const idUser = 1;
    const score = 5;
  
    // Act
    const newTravelScore = await TravelScoreService.updateScore(idUser, idTravel, score);
  
    // Assert
    expect(newTravelScore.length).toBeGreaterThan(0);
    expect(TravelScore.findOne).toHaveBeenCalledWith({
      where: { idTravel, idUser },
    });
  });


  it('Comentar Viaje', async () => {
    // Arrange
    const idTravel = '1';
    const idUser = '1';
    const comment = 'This is a new comment';
    const travelScoreService = new TravelScoreService();

    // Act
    const result = await TravelScoreService.updateComment(idTravel, idUser, comment);

    // Assert
    expect(result.comment).toBe(comment);
  });

  it("ERROR - Puntuar viajes es nulo", async () => {
    const idTravel = "1";
    const idUser = "1";
    const score = null;

    await expect(
      TravelScoreService.updateScore(idTravel, idUser, score)
    ).rejects.toThrow("El score no puede ser nulo.");
  });
});

describe("TcService", () => {
  it('Crear tarjeta de crédito', async () => {
    // Arrange
    const id_user = 1;
    const numero = '123456789';
    const vencimiento = '12/23';
    const titular = 'Prueba PEPE';
    const cvv = '123';

    // Act
    const result = await TcService.createTc(id_user, numero, vencimiento, titular, cvv);

    // Assert
    expect(result).toBeDefined();
    expect(result.id_user).toBe(id_user);
    expect(result.numero).toBe(numero);
    expect(result.vencimiento).toBe(vencimiento);
    expect(result.titular).toBe(titular);
    expect(result.cvv).toBe(cvv);
  });
  it("ERROR - Usuario sin id ingresando tarjeta", async () => {
    // Arrange
    const id_user = undefined;
    const numero = "validCardNumber";
    const vencimiento = "validExpirationDate";
    const titular = "validCardHolder";
    const cvv = "validCvv";

    // Act and Assert
    await expect(
      TcService.createTc(id_user, numero, vencimiento, titular, cvv)
    ).rejects.toThrow("Todos los campos son obligatorios.");
  });
});
