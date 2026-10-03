import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ArtifactDetailPage } from './pages/ArtifactDetailPage'
import { ArtifactsPage } from './pages/ArtifactsPage'
import { GradePage } from './pages/GradePage'
import { HomePage } from './pages/HomePage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="artifacts" element={<ArtifactsPage />} />
          <Route path="artifacts/:id" element={<ArtifactDetailPage />} />
          <Route path="grade" element={<GradePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
