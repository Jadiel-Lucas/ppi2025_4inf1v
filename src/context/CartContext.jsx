import { useState, useEffect, createContext } from "react";
import { supabase } from "../utils/supabase";

export const CartContext = createContext({
    products: [],
    loading: false,
    error: null,

    cart: [],
    addToCart: () => {},
    updateQtyCart: () => {},
    removeFromCart: () => {},
    clearCart: () => {},

    session: null,
    sessionLoading: false,
    sessionMessage: null,
    sessionError: null,
    handleSignUp: () => {},
    handleSignIn: () => {},
    handleSignOut: () => {},
});

export function CartProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchProductsSupabase() {
            const { data, error } = await supabase
                .from('products')
                .select();
            if (error) {
                setError(error);
            } else {
                setProducts(data);
            }
            setLoading(false);
        }
        fetchProductsSupabase();
        
        /*async function fetchProducts() {
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                setProducts(data.products);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();*/
    }, []);

    const [cart, setCart] = useState([]);

    function addToCart(product) {
        const existingProduct = cart.find((item) => item.id === product.id);
        if (existingProduct) {
            updateQuantity(product.id, existingProduct.quantity + 1);
        } else {
            setCart((prevCart) => [...prevCart, {...product, quantity: 1 }]);
        }
    }

    function removeFromCart(productId) {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    }

    function updateQtyCart(productId, quantity) {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId ? { ...item, quantity: quantity } : item
            )
        );
    }

    function clearCart() {
        setCart([]);
    }

    //User Session Management
    const [session, setSession] = useState(null);
    const [sessionLoading, setSessionLoading] = useState(false);
    const [sessionMessage, setSessionMessage] = useState(null);
    const [sessionError, setSessionError] = useState(null);

    async function handleSignUp(email, password, username) {
        setSessionLoading(true);
        setSessionMessage(null);
        setSessionError(null);
        
        try {
            const {data, error} = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        username: username,
                        admin: false,
                    },
                    emailRedirectTo: `${window.location.origin}/signin`,
                },
            });

            if (error) throw error;

            if (data.user) {
                setSessionMessage("Cadastro realizado! Verifique seu email para confirmar sua conta.");
            };
            window.location.href = "/signin";

        } catch (error) {
            setSessionError(error.message);
        } finally {
            setSessionLoading(false);
        }
    }

    async function handleSignIn(email, password) {
        setSessionLoading(true);
        setSessionMessage(null);
        setSessionError(null);
        
        try {
            const {data, error} = await supabase.auth.signIn({
                email,
                password
            });

            if (error) throw error;

            if (data.session) {
                setSession(data.session);
                setSessionMessage("Login realizado com sucesso!");
            }

        } catch (error) {
            setSessionError(error.message);
        } finally {
            setSessionLoading(false);
        }
    }

    async function handleSignOut() {
        setSessionLoading(true);
        setSessionMessage(null);
        setSessionError(null);
        
        try {
            const { error } = await supabase.auth.signOut();
            if (error) throw error;
            setSession(null);
            window.location.href = "/";
        } catch (error) {
            setSessionError(error.message);
        } finally {
            setSessionLoading(false);
        }
    }

    const context = {
        products: products,
        loading: loading,
        error: error,
        cart: cart,
        addToCart: addToCart,
        updateQtyCart: updateQtyCart,
        removeFromCart: removeFromCart,
        clearCart: clearCart,

        session: session,
        sessionLoading: sessionLoading,
        sessionMessage: sessionMessage,
        sessionError: sessionError,
        handleSignUp: handleSignUp,
        handleSignIn: handleSignIn,
        handleSignOut: handleSignOut,
    };

    return (
        <CartContext.Provider value={context}>{children}</CartContext.Provider>
    )
}