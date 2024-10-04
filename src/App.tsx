import "./index.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RegisterPage } from "./components/register-page";
import { LoginPage } from "./components/login-page";
import { CampaignListAndCreate } from "./components/campaign-list-and-create";
import { CampaignDetailsAndEmails } from "./components/campaign-details-and-emails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/campaigns" element={<CampaignListAndCreate />} />
        <Route path="/campaign-detail" element={<CampaignDetailsAndEmails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
