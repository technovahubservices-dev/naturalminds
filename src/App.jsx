import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./styles/App.css";
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
import { ProductDetailsPage } from "./components/Products";
import { apiRequest, buildProductPayload, formatCartSummary } from "./lib/api";
import BenefitsSection from "./components/flow";

const HOME_PAGE = "home";
const ABOUT_PAGE = "about";
const PRIVACY_POLICY_PAGE = "privacy-policy";
const TERMS_CONDITIONS_PAGE = "terms-conditions";
const PRODUCTS_PAGE = "products";
const PRODUCT_DETAIL_PAGE = "product-detail";
const CART_PAGE = "cart";
const CHECKOUT_PAGE = "checkout";
const ORDER_HISTORY_PAGE = "orders";
const SUCCESS_PAGE = "success";

function App() {
  const { register } = useReveal();
  const [page, setPage] = useState(HOME_PAGE);
  const [activeNav, setActiveNav] = useState(HOME_PAGE);
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
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productDetailSourcePage, setProductDetailSourcePage] = useState(PRODUCTS_PAGE);
  const [detailAddBusy, setDetailAddBusy] = useState(false);
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
  const whatsappNumber = "919443311007";

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
    if (nextPage === PRODUCT_DETAIL_PAGE) {
      setPage(nextPage);
      setActiveNav(PRODUCTS_PAGE);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (nextPage === "contact") {
      setActiveNav("contact");
      setPage(HOME_PAGE);

      window.requestAnimationFrame(() => {
        const section = document.getElementById("contact");
        section?.scrollIntoView({ behavior: "smooth", block: "start" });
      });

      return;
    }

    setActiveNav(nextPage);
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  const openProductDetail = (product) => {
    setSelectedProduct(product);
    setProductDetailSourcePage(page);
    setActiveNav(PRODUCTS_PAGE);
    setPage(PRODUCT_DETAIL_PAGE);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeProductDetail = () => {
    setPage(productDetailSourcePage || PRODUCTS_PAGE);
    setActiveNav(productDetailSourcePage || PRODUCTS_PAGE);
    setSelectedProduct(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderDetailValue = (value) => {
    if (value == null || value === "") {
      return "N/A";
    }

    if (Array.isArray(value)) {
      return value.join(", ");
    }

    if (typeof value === "object") {
      return JSON.stringify(value);
    }

    return String(value);
  };

  const addProductToCart = async (item) => {
    setDetailAddBusy(true);

    try {
      await apiRequest("/cart", {
        method: "POST",
        body: buildProductPayload(item, 1),
      });

      const cartData = await apiRequest("/cart");
      setCart(formatCartSummary(cartData?.cart));
    } finally {
      setDetailAddBusy(false);
    }
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
    setActiveNav(CART_PAGE);
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
        activePage={activeNav}
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
              onSelectProduct={openProductDetail}
            />
            <FoodCards register={register} />
            <Stats register={register} />
            <Gallery register={register} items={gallery} />
            <BenefitsSection register={register} />
            <Testimonials register={register} items={testimonials} />
            <Contact register={register} />
          </>
        )}

        {page === ABOUT_PAGE && <AboutPage onNavigate={navigate} register={register} />}

        {page === PRIVACY_POLICY_PAGE && <PrivacyPolicyPage onNavigate={navigate} register={register} />}

        {page === TERMS_CONDITIONS_PAGE && <TermsConditionsPage onNavigate={navigate} register={register} />}

        {page === PRODUCTS_PAGE && (
          <Products
            register={register}
            onCartChange={setCart}
            onNavigate={navigate}
            onSelectProduct={openProductDetail}
          />
        )}

        {page === PRODUCT_DETAIL_PAGE && selectedProduct && (
          <ProductDetailsPage
            item={selectedProduct}
            onBack={closeProductDetail}
            onAddToCart={addProductToCart}
            busyProductId={detailAddBusy ? (selectedProduct._id || selectedProduct.id || selectedProduct.productId) : ""}
            renderValue={renderDetailValue}
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
      <a
        className="whatsapp-float"
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>
      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;
