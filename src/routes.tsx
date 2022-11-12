import GlobalLayout from './pages/_layout';
import Index from './pages/index';
import ProductsIndex from './pages/products/index';
import ProductId  from './pages/products/[id]';

export default Index

export const routes = [
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      { path: '/', element: <Index />, index: true},
      { path: '/products', element: <ProductsIndex />, index: true},
      { path: '/products/:id', element: <ProductId />, },
    ]
  }
]

export const pages = [
  { route: '/' },
  { route: '/products' },
  { route: '/products/:id' },
]
