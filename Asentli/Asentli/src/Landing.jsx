import { useNavigate } from "react-router-dom";

export default function Landing() {
    const navigate = useNavigate();

    return (
        <div>
            <nav style={styles.navbar}>
                <h2 style={styles.brand}>🌿 Asentli</h2>
                <div style={styles.navLinks}>
                    <span>Benefits</span>
                    <span>How it works</span>
                    <span>Help</span>
                </div>
            </nav>

            <section style={styles.hero}>
                <h1 style={styles.heroTitle}>
                    Make your money go further and secure your family's food.
                </h1>
                <p style={styles.heroText}>
                    The first smart card and app in El Salvador designed to protect
                    your budget against rising food prices.
                </p>
                <button style={styles.btnPrimary} onClick={() => navigate("/login")}>
                    Sign up now
                </button>
            </section>

            <section style={styles.section}>
                <div style={styles.twoColumns}>
                    <div style={styles.box}>
                        <h3>Current challenge</h3>
                        <p style={styles.boxText}>
                            In El Salvador, the cost of the basic food basket has reached
                            historic highs. Food inflation is a reality on your table.
                        </p>
                    </div>
                    <div style={{ ...styles.box, ...styles.boxDark }}>
                        <h3>The Asentli solution</h3>
                        <p style={styles.boxText}>
                            Our platform automatically sets aside your food budget so you
                            always have funds for what matters most.
                        </p>
                    </div>
                </div>
            </section>

            <section style={styles.section}>
                <h2 style={styles.centerTitle}>Your path to financial control</h2>
                <div style={styles.threeColumns}>
                    <div style={styles.step}>
                        <h4 style={styles.stepTitle}>1. Set aside your budget</h4>
                        <p style={styles.stepText}>The app helps you set aside the amount meant for food.</p>
                    </div>
                    <div style={styles.step}>
                        <h4 style={styles.stepTitle}>2. Use your Smart Card</h4>
                        <p style={styles.stepText}>Pay at supermarkets and local markets.</p>
                    </div>
                    <div style={styles.step}>
                        <h4 style={styles.stepTitle}>3. Compare and Optimize</h4>
                        <p style={styles.stepText}>Get alerts for better prices and weekly reports.</p>
                    </div>
                </div>
            </section>

            <section style={{ ...styles.section, backgroundColor: "#eef3ea" }}>
                <h2 style={styles.centerTitle}>Benefits for your well-being</h2>
                <div style={styles.threeColumns}>
                    <div style={styles.step}>
                        <h4 style={styles.stepTitle}>Food Security</h4>
                        <p style={styles.stepText}>The money for essentials is always protected.</p>
                    </div>
                    <div style={styles.step}>
                        <h4 style={styles.stepTitle}>Real Control</h4>
                        <p style={styles.stepText}>Monitor your spending in real time.</p>
                    </div>
                    <div style={styles.step}>
                        <h4 style={styles.stepTitle}>Active Savings</h4>
                        <p style={styles.stepText}>Get cashback with our trusted partners.</p>
                    </div>
                </div>
            </section>

            <footer style={styles.footer}>
                <p>Asentli — Fintech familiar</p>
                <p style={{ marginTop: 6, fontSize: 12 }}>© 2026 Asentli. All rights reserved.</p>
            </footer>
        </div>
    );
}

const styles = {
    navbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        borderBottom: "1px solid #ddd",
    },
    brand: { color: "#003223" },
    navLinks: { display: "flex", gap: 20, fontSize: 14, color: "#333" },

    hero: {
        backgroundColor: "#F5EBE1",
        padding: "60px 30px",
        textAlign: "center",
    },
    heroTitle: { color: "#003223", fontSize: 28, marginBottom: 16 },
    heroText: { color: "#444", maxWidth: 500, margin: "0 auto 24px" },
    btnPrimary: {
        backgroundColor: "#FF6400",
        color: "#fff",
        padding: "14px 28px",
        borderRadius: 8,
        fontSize: 16,
        fontWeight: "bold",
        border: "none",
        cursor: "pointer",
    },

    section: { padding: "40px 30px" },
    centerTitle: { textAlign: "center", color: "#003223", marginBottom: 24 },

    twoColumns: { display: "flex", gap: 20, flexWrap: "wrap" },
    box: {
        flex: 1,
        minWidth: 250,
        backgroundColor: "#fff",
        border: "1px solid #ddd",
        borderRadius: 8,
        padding: 20,
    },
    boxDark: { backgroundColor: "#003223", color: "#fff", border: "none" },
    boxText: { marginTop: 10, fontSize: 14, color: "inherit" },

    threeColumns: { display: "flex", gap: 20, flexWrap: "wrap" },
    step: { flex: 1, minWidth: 200, textAlign: "center" },
    stepTitle: { color: "#003223", marginBottom: 8 },
    stepText: { color: "#555", fontSize: 14 },

    footer: {
        backgroundColor: "#003223",
        color: "#fff",
        textAlign: "center",
        padding: 24,
        fontSize: 13,
    },
};