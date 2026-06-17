import { useEffect, useState } from "react";
import "./App.css";
import { categories, features, gallery, testimonials } from "./data/siteContent";
import { useReveal } from "./hooks/useReveal";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Features from "./components/Features";
import Products from "./components/Products";
import FoodCards from "./components/description";
import Stats from "./components/Stats";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AboutPage from "./components/AboutPage";
import PrivacyPolicyPage from "./components/PrivacyPolicyPage";
import TermsConditionsPage from "./components/TermsConditionsPage";
import CartPage from "./components/CartPage";
import CheckoutPage from "./components/CheckoutPage";
import OrderHistoryPage from "./components/OrderHistoryPage";
import SuccessPage from "./components/SuccessPage";
import { apiRequest, formatCartSummary } from "./lib/api";

const HOME_PAGE = "home";
const ABOUT_PAGE = "about";
const PRIVACY_POLICY_PAGE = "privacy-policy";
const TERMS_CONDITIONS_PAGE = "terms-conditions";
const PRODUCTS_PAGE = "products";
const CART_PAGE = "cart";
const CHECKOUT_PAGE = "checkout";
const ORDER_HISTORY_PAGE = "orders";
const SUCCESS_PAGE = "success";

function App() {
  const { register } = useReveal();
  const [page, setPage] = useState(HOME_PAGE);
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    return window.localStorage.getItem("naturalminds-theme") || "light";
  });
  const [cart, setCart] = useState({ items: [], totalQuantity: 0, totalAmount: 0 });
  const [cartLoading, setCartLoading] = useState(false);
  const [cartError, setCartError] = useState("");
  const [successOrder, setSuccessOrder] = useState(null);
  const [orderHistory, setOrderHistory] = useState(() => {
    if (typeof window === "undefined") {
      return [];
    }

    try {
      return JSON.parse(window.localStorage.getItem("naturalminds-order-history") || "[]");
    } catch {
      return [];
    }
  });

  useEffect(() => {
    window.localStorage.setItem("naturalminds-theme", theme);
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    window.localStorage.setItem(
      "naturalminds-order-history",
      JSON.stringify(orderHistory.slice(0, 8))
    );
  }, [orderHistory]);

  useEffect(() => {
    const loadCart = async () => {
      setCartLoading(true);
      setCartError("");

      try {
        const data = await apiRequest("/cart");
        setCart(formatCartSummary(data?.cart));
      } catch (requestError) {
        setCart({ items: [], totalQuantity: 0, totalAmount: 0 });
        setCartError(requestError.message || "We could not load your cart.");
      } finally {
        setCartLoading(false);
      }
    };

    loadCart();
  }, []);

  useEffect(() => {
    if (page === CART_PAGE || page === CHECKOUT_PAGE) {
      refreshCart();
    }
  }, [page]);

  const navigate = (nextPage) => {
    if (nextPage === "contact") {
      setPage(HOME_PAGE);

      window.requestAnimationFrame(() => {
        const section = document.getElementById("contact");
        section?.scrollIntoView({ behavior: "smooth", block: "start" });
      });

      return;
    }

    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  const refreshCart = async () => {
    setCartLoading(true);
    setCartError("");

    try {
      const data = await apiRequest("/cart");
      setCart(formatCartSummary(data?.cart));
    } catch (requestError) {
      setCartError(requestError.message || "We could not refresh the cart.");
    } finally {
      setCartLoading(false);
    }
  };

  const updateCartItem = async (productId, quantity) => {
    await apiRequest(`/cart/${productId}`, {
      method: "PUT",
      body: { quantity },
    });

    await refreshCart();
  };

  const removeCartItem = async (productId) => {
    await apiRequest(`/cart/${productId}`, {
      method: "DELETE",
    });

    await refreshCart();
  };

  const clearCart = async () => {
    await apiRequest("/cart", {
      method: "DELETE",
    });

    await refreshCart();
  };

  const checkout = async (customerDetails) => {
    const data = await apiRequest("/checkout", {
      method: "POST",
      body: customerDetails,
    });

    const placedOrder = data?.order || {};
    const firstItem = Array.isArray(placedOrder.items) ? placedOrder.items[0] : null;
    const historyEntry = {
      id: placedOrder._id || `${Date.now()}`,
      image: firstItem?.image || "",
      name: firstItem?.name || placedOrder.customerName || "Order",
      price: Number(firstItem?.price) || 0,
      totalAmount: placedOrder.totalAmount ?? 0,
      totalQuantity: placedOrder.totalQuantity ?? 0,
      createdAt: new Date().toISOString(),
    };

    setOrderHistory((current) => [historyEntry, ...current].slice(0, 8));
    setSuccessOrder(data);
    setCart({ items: [], totalQuantity: 0, totalAmount: 0 });
    setPage(SUCCESS_PAGE);

    try {
      await clearCart();
    } catch {
      // The success state is already shown; backend cart clear failure should not block it.
    }

    return data;
  };

  return (
    <div className="app-shell" data-theme={theme}>
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onNavigate={navigate}
        cartCount={cart.totalQuantity}
        orderHistory={orderHistory}
      />
      <main>
        {page === HOME_PAGE && (
          <>
            <Hero
              register={register}
              onOfferClick={() => navigate("products")}
              onExploreClick={() => navigate("products")}
            />
            <Categories register={register} items={categories} />
            <Features register={register} items={features} />
            <Products
              register={register}
              onCartChange={setCart}
              onNavigate={navigate}
            />
            <FoodCards />
            <Stats register={register} />
            <Gallery register={register} items={gallery} />
            <Testimonials register={register} items={testimonials} />
            <Contact register={register} />
          </>
        )}

        {page === ABOUT_PAGE && <AboutPage onNavigate={navigate} />}

        {page === PRIVACY_POLICY_PAGE && <PrivacyPolicyPage onNavigate={navigate} />}

        {page === TERMS_CONDITIONS_PAGE && <TermsConditionsPage onNavigate={navigate} />}

        {page === PRODUCTS_PAGE && (
          <Products
            register={register}
            onCartChange={setCart}
            onNavigate={navigate}
          />
        )}

        {page === CART_PAGE && (
          <CartPage
            cart={cart}
            loading={cartLoading}
            error={cartError}
            onNavigate={navigate}
            onUpdateQuantity={updateCartItem}
            onRemoveItem={removeCartItem}
            onClearCart={clearCart}
          />
        )}

        {page === CHECKOUT_PAGE && (
          <CheckoutPage
            cart={cart}
            loading={cartLoading}
            error={cartError}
            onNavigate={navigate}
            onCheckout={checkout}
          />
        )}

        {page === ORDER_HISTORY_PAGE && (
          <OrderHistoryPage orderHistory={orderHistory} onNavigate={navigate} />
        )}

        {page === SUCCESS_PAGE && <SuccessPage order={successOrder} onNavigate={navigate} />}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;
