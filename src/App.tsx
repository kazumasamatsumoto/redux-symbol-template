import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Layout } from './components/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ClassicalFetchA } from './components/ClassicalFetchA'
import { ClassicalFetchB } from './components/ClassicalFetchB'
import { StateProvider } from './context/StateProvider'
import { ReactQueryA } from './components/ReactQueryA'
import { ReactQueryB } from './components/ReactQueryB'
import { MainContext } from './components/MainContext'
import { MainRTKit } from './components/MainRTKit'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      // fetchに失敗した場合は３回リトライするのをfalseにしているので無効化しています。
      refetchOnWindowFocus: false,
      // ブラウザにフォーカスを当てたときに再度リフェッチする。これは無駄にフェッチをする可能性があるのでfalseにする
    },
  },
})

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <StateProvider>
          <Layout>
            <Routes>
              <Route path="/fetch-a" element={<ClassicalFetchA />} />
              <Route path="/fetch-b" element={<ClassicalFetchB />} />
              <Route path="/" element={<ReactQueryA />} />
              <Route path="/query-b" element={<ReactQueryB />} />
              <Route path="/main-context" element={<MainContext />} />
              <Route path="/main-rtkit" element={<MainRTKit />} />
            </Routes>
            App
          </Layout>
        </StateProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
