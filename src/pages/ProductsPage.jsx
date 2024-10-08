import React from "react";
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import { motion } from "framer-motion";
import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import ProductsTable from "../components/products/ProductsTable";
import SalesTrendChart from "../components/products/SalesTrendChart";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";

const STATS = [
  { name: "Total Sales", icon: Zap, value: "$12,345", color: "#6366f" },
  { name: "New Users", icon: Users, value: "1,234", color: "#8B5CF6" },
  {
    name: "Total Products",
    icon: ShoppingBag,
    value: "567",
    color: "#EC4899",
  },
  {
    name: "Conversion Rate",
    icon: BarChart2,
    value: "12.5%",
    color: "#10B981",
  },
];

function ProductsPage() {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title='Products' />
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8 xl:px-12'>
        {/* Stats */}
        <motion.div
          className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {STATS.map((item) => (
            <React.Fragment key={item.name}>
              <StatCard
                name={item.name}
                icon={item.icon}
                value={item.value}
                color={item.color}
              />
            </React.Fragment>
          ))}
        </motion.div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'></div>
        {/* Product Table */}
        <ProductsTable />

        {/* Charts */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6'>
          <SalesTrendChart />
          <CategoryDistributionChart />
        </div>
      </main>
    </div>
  );
}

export default ProductsPage;
