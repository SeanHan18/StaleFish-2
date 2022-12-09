const { client } = require('./')

const { createProduct, getAllProducts } = require('./products')
const { createUser } = require('./users')

async function dropTables() {

  console.log("Dropping All Tables...")

  await client.query(`
    DROP TABLE IF EXISTS reviews;
    DROP TABLE IF EXISTS carts;
    DROP TABLE IF EXISTS products;
    DROP TABLE IF EXISTS categories;
    DROP TABLE IF EXISTS users;
  `);
  
  console.log("Finished dropping tables!");
}

async function createTables() {

  try {
    console.log("Starting to build tables...")

    await client.query(`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username varchar(255) UNIQUE NOT NULL,
        password varchar(255) NOT NULL,
        birthday DATE NOT NULL,
        cart integer ARRAY,
        active boolean DEFAULT TRUE,
        admin boolean DEFAULT FALSE
      );
      CREATE TABLE products (
        id SERIAL PRIMARY KEY,
        title varchar(255) NOT NULL,
        description TEXT NOT NULL,
        category VARCHAR NOT NULL,
        rating INTEGER,
        CHECK (rating BETWEEN 0 and 5),
        image VARCHAR NOT NULL,
        type varchar(255) NOT NULL,
        price DECIMAL(19,3) NOT NULL
      );
      CREATE TABLE carts (
        id SERIAL PRIMARY KEY,
        "userId" INTEGER REFERENCES users(id),
        "productIds" INTEGER ARRAY
      );
      CREATE TABLE reviews (
        id SERIAL PRIMARY KEY,
        name varchar(255) NOT NULL,
        description TEXT NOT NULL, 
        rating INTEGER NOT NULL,
        CHECK (rating BETWEEN 1 and 5),
        "productId" INTEGER REFERENCES products(id),
        "userId" INTEGER REFERENCES users(id)
      ); 
  `);

    console.log("Finished building tables!")
  } catch (error) {
    console.error("Error building tables!")
  }
}

async function createInitialProducts() {

    try {
    
    console.log('Creating Products')

    // BEARINGS
    const bearing1 = await createProduct({
      title: "Bones - Ceramic Super Reds Bearings",
      description: "These are bones bearings",
      type: "Bones",
      rating: 4,
      numReviews: "150",
      category: "Bearings",
      image: "https://drive.google.com/uc?id=1fRiuGi0kZQvZO6Vzx_rpnQ3Pvf_ljfNk",
      price: 30
    });
    const bearing2 = await createProduct({
      title: "Bones - Ceramic Swiss Bearings",
      description: "These are bones bearings",
      type: "Bones",
      rating: 4,
      numReviews: "150",
      category: "Bearings",
      image: "https://drive.google.com/uc?id=1B5OFQJfrojP2z-kkxNxGLYXantlmEBhm",
      price: 30
    });
    const bearing3 = await createProduct({
      title: "Bones - Original Swiss Bearings",
      description: "These are bones bearings",
      type: "Bones",
      rating: 4,
      numReviews: "150",
      category: "Bearings",
      image: "https://drive.google.com/uc?id=1koYxc6OYNEl3ymLmuuhq57vGGbIIlTxc",
      price: 30
    });
    const bearing4 = await createProduct({
      title: "Bones - Race Reds Bearings",
      description: "These are bones bearings",
      type: "Bones",
      rating: 4,
      numReviews: "150",
      category: "Bearings",
      image: "https://drive.google.com/uc?id=1AfTMcTGKxtuznYUtNwlao68FUJSguL9c",
      price: 30
    });
    const bearing5 = await createProduct({
      title: "Bones - Super Swiss 6 Ball Bearings",
      description: "These are bones bearings",
      type: "Bones",
      rating: 4,
      numReviews: "150",
      category: "Bearings",
      image: "https://drive.google.com/uc?id=1ZvvJ-KqSktljH8Ofa8XgBWp1GIIEafyD",
      price: 30
    });
    

    // DECKS
    const deck1 = await createProduct({
        title: "April - Yuto Skytree Deck 8.25 x 32",
        description: "April - Yuto Skytree Deck 8.25 x 32",
        type: "April",
        rating: 4,
        numReviews: "150",
        category: "Decks",
        image: "https://drive.google.com/uc?id=1tkMnzntbFD6SVtD_abmWgOY4VQBzT8UQ",
        price: 45
      });

    const deck2 = await createProduct({
        title: "Blueprint - Home Heart Black on Black Deck 8.25 x 32",
        description: "Blueprint - Home Heart Black on Black Deck 8.25 x 32",
        type: "Blueprint",
        rating: 4,
        numReviews: "150",
        category: "Decks",
        image: "https://drive.google.com/uc?id=1F5jjVpG9j340bMiU_zrYdQflTx4PPHmV",
        price: 50
      });

    const deck3 = await createProduct({
        title: "Blueprint - Home Heart Black on Gold Deck 8.25 x 32",
        description: "Blueprint - Home Heart Black on Gold Deck 8.25 x 32",
        type: "Blueprint",
        rating: 4,
        numReviews: "150",
        category: "Decks",
        image: "https://drive.google.com/uc?id=1hieoVIWOswRI8T630HGt955mpjg7mzXT",
        price: 50
      });

    const deck4 = await createProduct({
        title: "Element - '92 Classic Deck 7.75 x 32",
        description: "Element - '92 Classic Deck 7.75 x 32",
        type: "Element",
        rating: 4,
        numReviews: "150",
        category: "Decks",
        image: "https://drive.google.com/uc?id=1be543yoHHnhfQlOMj6KfGmkaoyiv86HN",
        price: 55
      });

    const deck5 = await createProduct({
        title: "Element - Dispersion Deck 8 x 32",
        description: "Element - Dispersion Deck 8 x 32",
        type: "Element",
        rating: 4,
        numReviews: "150",
        category: "Decks",
        image: "https://drive.google.com/uc?id=1G17Sqb0YGmtaGP6iZiNG1tK_IiX75I-k",
        price: 55
      });

    const deck6 = await createProduct({
        title: "Element - Quadrant Deck 8 x 32",
        description: "Element - Quadrant Deck 8 x 32",
        type: "Element",
        rating: 4,
        numReviews: "150",
        category: "Decks",
        image: "https://drive.google.com/uc?id=1Num22Gfv2KZEBvKjkUI7RRYDtVbWfY9D",
        price: 60
      });

    const deck7 = await createProduct({
        title: "Element - Section Black Deck 8 x 32",
        description: "Element - Section Black Deck 8 x 32",
        type: "Element",
        rating: 4,
        numReviews: "150",
        category: "Decks",
        image: "https://drive.google.com/uc?id=14jXOCZwnyRG_R6G1_xNFRohbszQUiMrv",
        price: 60
      });

    const deck8 = await createProduct({
        title: "Element x Bob Ross - Everybody Needs a Friend Deck 7.75 x 32",
        description: "Element x Bob Ross - Everybody Needs a Friend Deck 7.75 x 32",
        type: "Element",
        rating: 4,
        numReviews: "150",
        category: "Decks",
        image: "https://drive.google.com/uc?id=1NhxORLuwqQhDWkYg5gPMC34_YiqQD9qe",
        price: 75
      });

    const deck9 = await createProduct({
        title: "Enjoi - Whitey Panda Deck 7.5 x 31",
        description: "Enjoi - Whitey Panda Deck 7.5 x 31",
        type: "Enjoi",
        rating: 4,
        numReviews: "150",
        category: "Decks",
        image: "https://drive.google.com/uc?id=1smwkq7v934mFe_aCyifIhDdsovk3ya8Y",
        price: 75
      });

    const deck10 = await createProduct({
        title: "Globe - G1 Stack Refracted Deck 8 x 31.6",
        description: "Globe - G1 Stack Refracted Deck 8 x 31.6",
        type: "Globe",
        rating: 4,
        numReviews: "150",
        category: "Decks",
        image: "https://drive.google.com/uc?id=11vA9TJJV4HX_c5M9CtmGdIrt9P8sr3UP",
        price: 75
      });

    
    // TRUCKS
    const truck1 = await createProduct({
        title: "Ace - AF1 Hollow Truck Polished Trucks",
        description: "Ace - AF1 Hollow Truck Polished Trucks",
        type: "Ace",
        rating: 4,
        numReviews: "150",
        category: "Trucks",
        image: "https://drive.google.com/uc?id=1KcqhvgRJD-Mw2wkWtFVSvQPR5mREnCsb",
        price: 40
      });  
 
    const truck2 = await createProduct({
        title: "Independant - Stage 11 BTG Speed Standard Trucks",
        description: "Independant - Stage 11 BTG Speed Standard Trucks",
        type: "Independant",
        rating: 4,
        numReviews: "150",
        category: "Trucks",
        image: "https://drive.google.com/uc?id=11PZSKfJW01M0tZd3dDF8YtYRHeU9xnIL",
        price: 40
      });  

    const truck3 = await createProduct({
        title: "Independant - Stage 11 Primitive Trucks",
        description: "Independant - Stage 11 Primitive Trucks",
        type: "Independant",
        rating: 4,
        numReviews: "150",
        category: "Trucks",
        image: "https://drive.google.com/uc?id=1IyDj7b79loRLK6d9IAVz2N4DxeP05JTC",
        price: 40
      });  

    const truck4 = await createProduct({
        title: "Tensor - Alloys Truck Raw White Trucks",
        description: "Tensor - Alloys Truck Raw White Trucks",
        type: "Tensor",
        rating: 4,
        numReviews: "150",
        category: "Trucks",
        image: "https://drive.google.com/uc?id=1qYa-R3NeFPQcROFw0h_s3C-Emx8B7E2r",
        price: 40
      });  

    const truck5 = await createProduct({
        title: "Venture - Worrest Custom V-Light Trucks",
        description: "Venture - Worrest Custom V-Light Trucks",
        type: "Venture",
        rating: 4,
        numReviews: "150",
        category: "Trucks",
        image: "https://drive.google.com/uc?id=198WWpi7L8sjVJjr3daywR_FuqyRjMWfS",
        price: 40
      });  


    // WHEELS
    const wheel1 = await createProduct({
        title: "Bones - ATF Rough Riders Black",
        description: "Bones - ATF Rough Riders Black",
        type: "Bones",
        rating: 4,
        numReviews: "150",
        category: "Wheels",
        image: "https://drive.google.com/uc?id=1Qt08t22SSr7cXveCMF00OzbjZOviwV4f",
        price: 25
      });

    const wheel2 = await createProduct({
        title: "Bones - ATF Rough Riders Green",
        description: "Bones - ATF Rough Riders Green",
        type: "Bones",
        rating: 4,
        numReviews: "150",
        category: "Wheels",
        image: "https://drive.google.com/uc?id=1krKDUYGztEKSDDY9-CqHzk4Zg_WRLuBB",
        price: 25
      });

    const wheel3 = await createProduct({
        title: "Bones - ATF Rough Riders Red",
        description: "Bones - ATF Rough Riders Red",
        type: "Bones",
        rating: 4,
        numReviews: "150",
        category: "Wheels",
        image: "https://drive.google.com/uc?id=1H4F1N3d5gwGY8l_aUqbOkNdi6O1uMI-k",
        price: 25
      });

    const wheel4 = await createProduct({
        title: "Bones - STF Miskell Power 103a V5 Sidecut Wheels",
        description: "Bones - STF Miskell Power 103a V5 Sidecut Wheels",
        type: "Bones",
        rating: 4,
        numReviews: "150",
        category: "Wheels",
        image: "https://drive.google.com/uc?id=1zf_-QsV2s-p9K3I17kvO7_qFgbc4CYhM",
        price: 30
      });

    const wheel5 = await createProduct({
        title: "Bones - STF Reaper Burial 99a V1 Wheels",
        description: "Bones - STF Reaper Burial 99a V1 Wheels",
        type: "Bones",
        rating: 4,
        numReviews: "150",
        category: "Wheels",
        image: "https://drive.google.com/uc?id=1H5V3q-Yus-JGp172kp4rIto_xt_u4rfX",
        price: 30
      });

    console.log('Finished creating Products')
    console.log("Products created:", await getAllProducts())

  }
  catch (error) {
    console.error('error creating Products')
  }
}


async function createInitialUsers() {

  console.log("Creating initial users...")

  try {
    const usersToCreate = [
      { username: "sean", password: "seanpassword", birthday: "09-21-1993", admin: "true" },
      { username: "gary", password: "garypassword", birthday: "06-11-2022", admin: "true" },
      { username: "grant", password: "grantpassword", birthday: "07-11-2022", admin: "true" },
      { username: "wes", password: "wespassword", birthday: "07-11-2022", admin: "true" },
      { username: "brayden", password: "braydenpassword", birthday: "07-11-2022", admin: "true" }
    ]

    const users = await Promise.all(usersToCreate.map(createUser))

    console.log("Users created:")
    console.log(users)
    console.log("Finished creating intial users")

  } catch (error) {
    console.error("Error creating initial users")
    throw error
  }
}

async function buildDB() {

  try {
    
    client.connect();
    await dropTables();
    await createTables();
    await createInitialProducts();
    await createInitialUsers();

  } catch (ex) {
    console.log('Error building the DB')
    throw ex;
  }
}

buildDB()
  .catch(console.error)
  .finally(() => client.end())