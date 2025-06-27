# What package use 
## Styles:
**tailwindcss** امکان وارد کردن استایل های بطور مستقیم در کدها که باعث سرعت - عدم تداخل بین استایل های کامپوننت ها و کاهش فایل سی اس اس
**postcss** 
پلاگین هایی برای بهینه کردن فایل سی اس اس
پلاگین هایی برای بهینه شدن پروژه مثل autoprefix - cssnano
**shadcn ui**
   کامپوننت های آماده در اختیار قرار میدهد که باعث صرفه جویی در زمان و سرعت در پیشرفت پروژه میشود.
## Form managment:
**rearc-hook-form**
###### برای ساده سازی مدیریت فرم ها از این کتابخانه استفاده می شود مثل هندل کردن خطا ها
## Schema validation
**Yup/Zod**
این کتابخانه برای اعتبار سنجی و اطمینان از صحت داده های رودی های 
## Fetching Data
**axios**
###### این کتابخانه برای مدیریت درخواست  و فچ کردن داده ها و ویژگی هایی در اختیار قرار میدهد برای بهبود پروژه مثل مدیریت توکن ها
Interceptor - refresh token
**SWR / React Query**
برای مدیریت داده ها
(Asynchronous Data State)
قابلیت هایی در اختیار قرار می دهد مثل:
Caching - Revalidation

# Using Global State Management is required?
با توجه به ویژگی ها و ساختار پروژه نیاز است که از  مدیریت استیت سراسری استفاده شود تا باعث جلوگیری از مشکلاتی مانند :
Boilerplate, drilling state
شود
# How many pages are used? and what type of rendering is?
 1.   __Home / Tour Listing Page__
 * ISR : 
- لیست تورها ممکن است هر چند مدت یکبار یا تغییر مکند، پس این روش رندرینگ می‌تواند گزینه بهتری باشد. این روش باعث می‌شود صفحه در زمان بیلد یکبار ساخته شود و با هر درخواست‌ سریع‌تر بارگذاری شود.

2. __Tour Detail Page__
(/tours/[slug] یا /tours/[id])
* SSR 
-  اطلاعات جزئیات تور مثل قیمت، توضیحات به صورت پویا از ای پی آی گرفته می‌شوند و برای هر تور منحصر به فرد هستند. وبا این روش رندرینگ اطمینان خواهیم داشت که صفحه بروز هست و همیشه آخرین اطلاعات نمایش داده شود.
*  ترکیب ssr,csr
البته میتوان برای داده های اولیه و تعاملات کاربر (مانند فرم رزرو، گالری تصاویر) این دو روش  رندرینگ را ترکیب کرد


3. __LoginPage / Register Page__:
* CSR 
-  چون این صفحات نیاز به اطلاعات اولیه از سرور ندارند. این صفحات پس از بارگذاری اولیه در مرورگر رندر می‌شوند.

4. __User Profile and dashboard Page__
*  SSR 
-  اطلاعات پروفایل کاربر (شامل اطلاعات شخصی، اطلاعات بانکی، تورهای رزرو شده) نیاز به احراز هویت دارد و باید از سرور دریافت شود.  


5. __Booking / Checkout Page__
 /booking/[tourId] یا /checkout
*  SSR 
-  این صفحه نیاز به اطلاعات به‌روز تور و اطلاعات کاربر برای تکمیل فرایند رزرو دارد. پس برای امنیت و اطمینان از صحت اطلاعات در این مرحله حیاتی ، این روش رندرینگ مناسب است.

6. __My Tours / Transaction History Page__:
*  SSR 
-  این صفحات نیز نیاز به احراز هویت دارند و اطلاعات کاربر  مانند لیست تورهایی که رزرو کرده یا تراکنش‌های انجام شده را از سرور دریافت می‌کنند.

7. __About Us / Contact Us / Tourism Services__:
* SSG 
-  محتوای این صفحات معمولاً ثابت است و به ندرت تغییر می‌کند. SSG بهترین عملکرد را ارائه می‌دهد .

8. __notFoundPage__:
SSG

9. __notConnected__:
client side rendering

# Project Structure 
├── app/
│   ├── (api)/                 # For Next.js API Routes (if needed)
│   │   └── route.js
|   |   └── ...
│   ├── globals.css   
│   ├── layout.js            
│   ├── page.js              
│   ├── (auth)/                # for authentication pages
│   │   ├── login/
│   │   │   └── page.js
│   │   └── register/
│   │       └── page.js
│   ├── (tours)/               # Route Group for tour pages
│   │   ├── page.js            # Tours listing page
│   │   └── [tourId]/
│   │       └── page.js        # Tour dynamic detail page
│   ├── (dashboard)/           # Route Group for profile 
│   │   ├── page.js            # User profile page
│   │   ├── my-tours/
│   │   │   └── page.js               
│   ├── about-us/
│   │   └── page.js          
│   └── contact-us
|   │   └──page.js
|   └── service-tour
|   └── ...      
|
├── public/
│   └── ...                    # Static assets like images, fonts, etc.
├── components/
│   ├── ui/                   
│   │   └── ...                # Shadcn UI elements (Button, Input, Modal...)
│   │
│   ├── layouts/               # Layout components (Header, Footer)
│   │   ├── Header.jsx
│   │   └── Footer.jsx
|   |
│   └── templates/              # Form Components  
│        ├── auth/
│        │   └── AuthOtpForm.jsx
│        ├── tour/
│        │    ├──TourCard.jsx
|        |    └──TourBookingForm.jsx
│        └── otp-form
|            ├──CheckOtpForm.jsx
|            └──SendOtpForm.jsx
|    
├── hooks/   
|   └── ...              # Reusable custom React hooks (useDebounce etc.)
|               
├── lib/                  # configurations, and foundational logic
│   ├── api.js            # Axios instance, interceptors (for Refresh Token)
│   ├── auth.js           # JWT/Refresh Token logic, auth helpers
|   └── utils.js          # General utility functions (formatData etc.)
|
├── shared/
|   └── constants.js      # Global constants (URLs, local storage keys etc.)
|    ├── schemas/         # New directory for Zod/Yup schemas
│       ├── authSchema.js     
│       ├── userSchema.js    
|       └── ...
|
├── services/               # API interaction logic
│   ├── authService.js      # Functions for login, register, OTP, refresh token
│   ├── tourService.js      # Functions for fetching tours data
│   ├── userService.js      # Functions for user profile data
│   └── ...
├── store/                   # Global state management 
│   ├── authStore.js         # User authentication state
│   ├── tourFilterStore.js   # Global state for tour filters
│   └── ...
|
├── .env
├── .gitignore
├── components.json      # for Shadcn UI library  
├── eslint.config.mjs
├── next.config.js
└── package.json
# Challenges
از این جهت که این یک پروژه نسبتا بزرگی برای من به حساب می آید فکر میکنم هر یک از بخش ها می تواند برای من چالش داشته باشد اما مواردی که ممکن است بیش تر من را به چالش بکشاند مربوط به کتابخانه هایی است که جدید هستند و یا اینکه کمتر با آن ها کار کردم مثل:
مدیریت استیت ها با ریداکس - کار با ریاکت کوری کمی برای من مشکل است 
-  کار با swr در صورت استفاده
# repeated algorithm
1. Buttons
2. Inputs
3. Cards
4. Icon
5. Styles
6. Header
7. Footer