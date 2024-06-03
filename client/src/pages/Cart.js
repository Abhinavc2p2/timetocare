import Layout from "./../components/Layout";
import React, { useState } from 'react';
import { Card, Button, Input } from 'antd'; // Import Card, Button, and Input components from Ant Design
import "../styles/Cart.css"; // Import CSS file for styling
import { CloseOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import paracetamol from '../styles/p.jpg';

const { Search } = Input; // Destructure the Search component from Ant Design


const products = [{
    id: 1,
    name: 'Paracetamol',
    price: 10,
    description: 'Paracetamol is a common pain reliever and fever reducer.',
    image: paracetamol
},
{
    id: 2,
    name: 'Ibuprofen',
    price: 50,
    description: 'Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) used to treat pain and reduce inflammation.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/6/319597573/MH/NE/SR/135658020/ibuprofen-400-mg-bp-tablets.jpg'
},
{
    id: 3,
    name: 'Aspirin',
    price: 15,
    description: 'Aspirin is a medication used to reduce pain, fever, or inflammation.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/7/330506870/UM/GZ/QO/135658020/aspirin-dispersible-tablets.jpg'

},
{
    id: 4,
    name: 'Amoxicillin',
    price: 120,
    description: 'Amoxicillin is an antibiotic used to treat many different types of infections caused by bacteria, such as ear infections, bladder infections, pneumonia, gonorrhea, and E. coli or salmonella infection.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6puCzu16mR4BBrS6-RNLc3eXHdobMwo8itHx7FGLVNw&s'
},
{
    id: 5,
    name: 'Prednisone',
    price: 62,
    description: 'Prednisone is a corticosteroid. It prevents the release of substances in the body that cause inflammation. It also suppresses the immune system.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/4/301102137/MB/IM/IC/145955620/prednisolone-40-mg-tablets.jpg'
},
{
    id: 6,
    name: 'Lisinopril',
    price: 300,
    description: 'Lisinopril is an ACE inhibitor used to treat high blood pressure (hypertension) in adults and children who are at least 6 years old.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3sRTkCsYGWBR4sFIUvTOYElfPCCYdRUAqxApc9eEllQ&s'
},
{
    id: 7,
    name: 'Atorvastatin',
    price: 75,
    description: 'Atorvastatin is used to lower cholesterol and triglycerides (types of fat) in the blood.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/1/ZP/CE/VD/142511677/20mg-atorvastatin-tablets-ip.jpg'
},
{
    id: 8,
    name: 'Metformin',
    price: 18,
    description: 'Metformin is used together with diet and exercise to improve blood sugar control in adults with type 2 diabetes mellitus.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/8/332774949/NY/WA/ZJ/6299000/metformin-hydrochloride-tablets.jpeg'
},
{
    id: 9,
    name: 'Azithromycin',
    price: 110,
    description: 'Azithromycin is used to treat many different types of infections caused by bacteria, including infections of the lungs, sinus, throat, tonsils, skin, urinary tract, cervix, or genitals.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/7/328523507/HJ/PT/HG/125278182/azithromycin-tablet-500-mg-500x500.jpeg'
},
{
    id: 10,
    name: 'Ciprofloxacin',
    price: 49,
    description: 'Ciprofloxacin is an antibiotic used to treat a variety of bacterial infections.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDtfYNN5t0FeH7R1jv_v8HhxkPzQQBFP55PKLonmTx7Q&s'
},
{
    id: 11,
    name: 'Fluoxetine',
    price: 39,
    description: 'Fluoxetine is used to treat major depressive disorder, bulimia nervosa (an eating disorder), obsessive-compulsive disorder, panic disorder, and premenstrual dysphoric disorder (PMDD).',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/9/344642338/YF/IY/EZ/53504161/fluoxetine-20-mg-tablets.jpeg'
},
{
    id: 12,
    name: 'Hydrochlorothiazide',
    price: 20,
    description: 'Hydrochlorothiazide is a thiazide diuretic (water pill) that helps prevent your body from absorbing too much salt, which can cause fluid retention.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/1/BB/PR/BO/144227214/hydrochlorothiazide-tablets.jpg'
},
{
    id: 13,
    name: 'Lorazepam',
    price: 78,
    description: 'Lorazepam is a benzodiazepine (ben-zoe-dye-AZE-eh-peen). It affects chemicals in the brain that may be unbalanced in people with anxiety.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXQxtbk_4njpd7eZk3BkuZrCqW6IOfzXNQVq9iyvC4zQ&s'
},
{
    id: 14,
    name: 'Simvastatin',
    price: 35,
    description: 'Simvastatin is used to lower cholesterol and triglycerides (types of fat) in the blood.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2024/2/383025395/FB/AF/RE/109604861/simvastatin-10-mg-tablet.jpg'
},
{
    id: 15,
    name: 'Trazodone',
    price: 79,
    description: 'Trazodone is an antidepressant medicine that works to balance chemicals in the brain.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/4/298205989/OG/WJ/ZS/138338908/trazodone-50-mg-tablet.jpg'
},
    {
        id: 16,
        name: 'Wikoryl Tablet',
        price: 60,
        description: 'Wikoryl Tablet is a medicine used in the treatment of common cold symptoms. It provides relief from symptoms such as headache, sore throat, runny nose, muscular pain, and fever.',
        image: 'https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/b9pxdibwiox48cnnvbip.jpg'
    },
    {
        id: 17,
        name: 'Sumo Cold Tablet',
        price: 31.59,
        description: 'Sumo Cold Tablet is used to treat common cold symptoms. It provides temporary relief from stuffiness in the nose.',
        image: 'https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/cropped/qeixgtbw61xwkunrugjp.jpg'
    },
    {
        id: 18,
        name: 'Zerodol-SP Tablet',
        price: 99.63,
        description: 'Zerodol-SP Tablet is a combination medicine used to relieve pain and swelling in various conditions like muscle pain, joint pain, and postoperative pain.',
        image: 'https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/cropped/lgixlqxumpihdtbmvwyb.jpg'
    },
    {
        id: 19,
        name: 'Ocitop 40 Tablet',
        price: 60.9,
        description: 'Ocitop 40 Tablet is a medicine that reduces the amount of acid produced in your stomach.',
        image: 'https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/10ec6c23e1124848a8d43bc881c7f4fc.jpg'
    },
    {
        id: 20,
        name: 'Monticope Tablet',
        price: 66.42,
        description: 'Monticope Tablet is used in the treatment of allergic symptoms such as runny nose, stuffy nose, sneezing, itching, swelling, watery eyes, and congestion or stuffiness.',
        image: 'https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/cfdfbbe893174815946e897d2a35384a.jpg'
    },
    {
        id: 21,
        name: 'Norflox-TZ RF Tablet',
        price: 82.62,
        description: 'Norflox-TZ RF Tablet is a combination of two antibiotics that effectively treat diarrhea and dysentery. It kills the microorganisms to treat the infection.',
        image: 'https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/f9f8424601dd49739565d5d36cd87e66.jpg'
    },
    {
        id: 22,
        name: 'Zifi 200 Tablet',
        price: 88.29,
        description: 'Zifi 200 Tablet is used to treat a variety of bacterial infections. It is effective in infections of the respiratory tract (eg. pneumonia), urinary tract, ear, nasal sinus, throat, and some sexually transmitted diseases.',
        image: 'https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/cropped/zesjgz3gt5mi69ja5mck.jpg'
    },
    {
        id: 23,
        name: 'Moxikind-CV 625 Tablet',
        price: 152.28,
        description: 'Moxikind-CV 625 Tablet is an antibiotic that helps your body fight infections caused by bacteria. It is used to treat infections of the lungs (e.g., pneumonia), ear, nasal sinus, urinary tract, skin, and soft tissue.',
        image: 'https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/cropped/hjlqn2ftdmmeyqyrl70q.jpg'
    },
    {
        id: 24,
        name: 'Deriphyllin Tablet',
        price: 17.82,
        description: 'Deriphyllin Tablet is used to treat asthma and chronic obstructive pulmonary disorder (a lung disorder in which the flow of air to the lungs is blocked).',
        image: 'https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/55ddf445ba6f430fac5ab9e6bf1bae1f.jpg'
    },
    {
        id: 25,
        name: 'Azel 80 Capsule',
        price: 7308,
        description: 'Azel 80 Capsule is used in the treatment of cancer of the prostate gland. It may be also used to treat other conditions, as determined by the doctor.',
        image: 'https://onemg.gumlet.io/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/eb2f5d0ade664c31bdd415747ebc710b.jpg'
    },
    {
        id: 26,
        name: 'Ascoril LS Syrup',
        price: 104,
        description: 'Ascoril LS Syrup is a combination medicine used in fever'
    }


];
const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [cartVisible, setCartVisible] = useState(false);
    const [searchText, setSearchText] = useState(''); // State for storing search text

    const addToCart = (product) => {
        const existingItem = cartItems.find(item => item.id === product.id);
        if (existingItem) {
            const updatedItems = cartItems.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setCartItems(updatedItems);
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    const handleSearch = () => {
        // Implement your search logic here
        console.log('Searching for:', searchText);
        // You can perform actions such as filtering products based on searchText
      };

    const removeFromCart = (productId) => {
        const updatedItems = cartItems.map(item =>
            item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        ).filter(item => item.quantity > 0);
        setCartItems(updatedItems);
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const toggleCartVisibility = () => {
        setCartVisible(!cartVisible);
    };

    // Filter products based on search text
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <Layout>
            <div className={`container ${cartVisible ? 'blur-background' : ''}`}>
                <div className="products">
                    
                    <div className="search-bar">
  <div className="input-wrapper">
    <input
      type="text"
      className="custom-search-input"
      placeholder="Search medicines..."
      onChange={(e) => setSearchText(e.target.value)}
    />
    <button className="custom-search-button" onClick={handleSearch}>
      <i className="fas fa-search"></i>
    </button>
  </div>
</div>

                    <div className="product-cards">
                        {filteredProducts.map(product => (
                            <Card key={product.id} className="product-card">
                                <img src={product.image} alt={product.name} />
                                <div>
                                    <h3>{product.name}</h3>
                                    <p>{product.description}</p>
                                    <p>Price: ₹{product.price}</p>
                                    <Button onClick={() => addToCart(product)}>Add to Cart</Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            {/* Cart overlay */}
            {cartVisible && (
                <div className="cart-overlay" onClick={toggleCartVisibility}>
                    <div className="cart" onClick={(e) => e.stopPropagation()}>
                        <div className="cart-header">
                            <h2>Cart</h2>
                            <button onClick={toggleCartVisibility} className="close-button"><CloseOutlined /></button>
                        </div>
                        <div className="cart-items">
                            {cartItems.length === 0 ? (
                                <p>Your cart is empty</p>
                            ) : (
                                <ul>
                                    {cartItems.map(item => (
                                        <li key={item.id} className="cart-item">
                                            <img src={item.image} alt={item.name} />
                                            <div>
                                                <h3>{item.name}</h3>
                                                <p>Price: ₹{item.price}</p>
                                                <div className="quantity-control">
                                                    <Button onClick={() => removeFromCart(item.id)} icon={<MinusOutlined />} />
                                                    <span>{item.quantity}</span>
                                                    <Button onClick={() => addToCart(item)} icon={<PlusOutlined />} />
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                    <strong>Total: ₹{calculateTotal()}</strong>
                                    <Button className="buybutton" type="primary">Buy</Button>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Cart button with item count notification */}
            <button onClick={toggleCartVisibility} className="cart-toggle">
                Cart-Size{cartItems.length > 0 && <span className="cart-notification">{cartItems.length}</span>}
            </button>
        </Layout>
    );
};

export default Cart;
