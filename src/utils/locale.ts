import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          admin: 'Admin',
          dashboard: 'Dashboard',
          orders: 'Orders',
          products: 'Products',
          discountProducts: 'Discount Products',
          users: 'Users',
          analytics: 'Analytics',
          statistic: 'Statistic',
          discount: 'Discount',
          inventory: 'Inventory',
          logout: 'Logout',
          login: 'Login',
          summary: 'Summary',
          welcome: 'Hi, welcome back!',
          purchaseAmount: 'Purchase amount',
          categories: 'Categories',
          thisMonthSales: 'This month Sales',
          thisMonthOrders: 'This month Orders',
          thisMonthRevenue: 'This month Revenue',
          quickAnalysis: 'Quick Analysis',
          topCustomers: 'Top Customers',
          latestTransaction: 'Latest Transactions',
          customer: 'Customer',
          totalSpending: 'Total Spending',
          totalOrders: 'Total Orders',
          orderID: 'Order ID',
          totalPrice: 'Total Price',
          date: 'Date',
          status: 'Status',
          approved: 'Approved',
          pending: 'Pending',
          rejected: 'Rejected',
          viewAll: 'View All',
          search: 'Search',
          editCustomer: 'Edit Customer',
          editProduct: 'Edit Product',
          AccountDetails: 'Account Details',
          contacts: 'Contacts',
          edit: 'Edit',
          userName: 'User Name',
          pass: 'Password',
          phoneNumber: 'Phone Number',
          email: 'Email',
          address: 'Address',
          upload: 'Upload',
          location: 'Location',
          deleteCustomer: 'Delete Customer',
          modalMessage: 'Are you sure about delete this?',
          delete: 'Delete',
          cancel: 'Cancel',
          actions: 'Actions',
          category: 'Category',
          all: 'All',
          clothing: 'Clothing',
          digital: 'Digital',
          beauty: 'Beauty',
          product: 'Product',
          price: 'Price',
          proName: 'Product Name',
          inventoryCount: 'Inventory Count',
          loginPage: 'Login Into Your Account',
          errorMessage: "Please enter 'admin' in User Name box",
          forgetPass: 'Forget your password?',
          rememberMe: 'Remember me',
          salesAmount: '5,340',
          orderAmount: '3000',
          revenueAmount: '2,500',
          currency: '$',
          summaryOfSale: 'Chart Of Sale',
          summaryOfRevenue: 'Chart Of Revenue',
          summaryOfOrders: 'Chart Of Order',
          Jan: 'Jan',
          Feb: 'Feb',
          Mar: 'Mar',
          Apr: 'Apr',
          May: 'May',
          Jun: 'Jun',
          July: 'July',
          Aug: 'Aug',
          Sep: 'Sep',
          Oct: 'Oct',
          Nov: 'Nov',
          Dec: 'Dec',
          backToHome: 'Back to Main Page',
          notFoundMsg: 'Page Not Found!',
        },
      },
      vn: {
        translation: {
          admin: 'Quản trị viên',
          dashboard: 'Trang chủ',
          orders: 'Đơn hàng',
          products: 'Sản phẩm',
          discountProducts: 'Sản phẩm giảm giá',
          users: 'Người dùng',
          analytics: 'Thống kê',
          statistic: 'Statistic',
          discount: 'Giảm giá',
          inventory: 'Hàng tồn kho',
          logout: 'Đăng xuất',
          login: 'Đăng nhập',
          summary: 'Tóm tắt',
          welcome: 'Chào mừng bạn trở lại!',
          purchaseAmount: 'Đơn hàng',
          categories: 'Loại mặt hàng',
          thisMonthSales: 'Doanh thu tháng này',
          thisMonthOrders: 'Đơn hàng tháng này',
          thisMonthRevenue: 'Doanh thu tháng này',
          quickAnalysis: 'Phân tích nhanh',
          topCustomers: 'Khách hàng hàng đầu',
          latestTransaction: 'Giao dịch gần đây',
          customer: 'Khách hàng',
          totalSpending: 'Tổng chi tiêu',
          totalOrders: 'Tổng số đơn hàng',
          orderID: 'ID Đơn hàng',
          totalPrice: 'Tổng giá',
          date: 'Ngày',
          status: 'Trạng thái',
          approved: 'Đã duyệt',
          pending: 'Đang chờ',
          rejected: 'Bị từ chối',
          viewAll: 'Xem tất cả',
          search: 'Tìm kiếm',
          editCustomer: 'Chỉnh sửa khách hàng',
          editProduct: 'Chỉnh sửa sản phẩm',
          AccountDetails: 'Chi tiết tài khoản',
          contacts: 'Liên hệ',
          edit: 'Chỉnh sửa',
          userName: 'Tên người dùng',
          pass: 'Mật khẩu',
          phoneNumber: 'Số điện thoại',
          email: 'Email',
          address: 'Địa chỉ',
          upload: 'Tải lên',
          location: 'Vị trí',
          actions: 'Hành động',
          deleteCustomer: 'Xóa khách hàng',
          modalMessage: 'Bạn có chắc chắn muốn xóa không?',
          delete: 'Xóa',
          cancel: 'Hủy bỏ',
          category: 'Danh mục',
          all: 'Tất cả',
          clothing: 'Quần áo',
          digital: 'Kỹ thuật số',
          beauty: 'Làm đẹp',
          product: 'Sản phẩm',
          price: 'Giá',
          proName: 'Tên sản phẩm',
          inventoryCount: 'Số lượng hàng tồn',
          loginPage: 'Đăng nhập vào tài khoản của bạn',
          errorMessage: "Vui lòng nhập 'admin' vào ô tên người dùng.",
          forgetPass: 'Quên mật khẩu?',
          rememberMe: 'Nhớ tài khoản',
          salesAmount: '24,000,000',
          orderAmount: '3,000',
          revenueAmount: '12,000,000',
          currency: 'Đồng',
          summaryOfSale: 'Biểu đồ doanh thu',
          summaryOfRevenue: 'Biểu đồ lợi nhuận',
          summaryOfOrders: 'Biểu đồ đơn hàng',
          Jan: 'Tháng 1',
          Feb: 'Tháng 2',
          Mar: 'Tháng 3',
          Apr: 'Tháng 4',
          May: 'Tháng 5',
          Jun: 'Tháng 6',
          July: 'Tháng 7',
          Aug: 'Tháng 8',
          Sep: 'Tháng 9',
          Oct: 'Tháng 10',
          Nov: 'Tháng 11',
          Dec: 'Tháng 12',
          backToHome: 'Quay về trang chủ',
          notFoundMsg: 'Không tìm thấy trang!',
        },
      },
    },
    lng: 'en', // if you're using a language detector, do not define the lng option
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export default i18n;
