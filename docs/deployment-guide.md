# WordPress Deployment Guide for Viju Family Product Catalog (Nigerian Market)

This guide will help you deploy the Viju Family React product catalog application to WordPress, specifically configured for the Nigerian market as a view-only product showcase system.

## Prerequisites

- WordPress 5.0 or higher with admin access
- Node.js 18+ and npm installed locally
- FTP/SFTP access to your WordPress server
- SSL certificate (recommended for professional websites)
- Nigerian business registration (CAC certificate)
- Professional hosting for product catalog system

## Nigerian Market Specific Setup

### Currency Configuration
- Primary Currency: Nigerian Naira (₦ NGN)
- Tax Rate: 7.5% VAT (as per Nigerian tax law)
- Phone Format: +234 (Nigerian country code)
- Timezone: Africa/Lagos
- Business Hours: WAT (West Africa Time)

### Required Payment Gateways
For Nigerian market, integrate with:
- **Contact-Based Sales** (Primary - inquiry system)
- **WhatsApp Business** (Direct customer communication)
- **Email Quotation** (Formal pricing requests)
- **Phone Consultation** (Immediate customer support)

## Prerequisites

- WordPress 5.0 or higher with admin access
- Node.js 18+ and npm installed locally
- FTP/SFTP access to your WordPress server
- SSL certificate (recommended for ecommerce)

## Deployment Options

### Option 1: WordPress Theme Integration (Recommended)

This approach integrates the React app directly into a WordPress theme.

#### Step 1: Build the React Application

```bash
# Install dependencies
npm install

# Create production build
npm run build:prod
```

#### Step 2: Create WordPress Theme Structure

Create a new WordPress theme folder: `/wp-content/themes/viju-family/`

```
viju-family/
├── style.css
├── index.php
├── functions.php
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
└── dist/ (React build files)
```

#### Step 3: WordPress Theme Files

**style.css:**
```css
/*
Theme Name: Viju Family Product Catalog
Description: Modern product catalog theme for Viju Family
Version: 1.0
Author: Viju Family
*/
```

**index.php:**
```php
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title(); ?></title>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <div id="root"></div>
    <?php wp_footer(); ?>
</body>
</html>
```

**functions.php:**
```php
<?php
function viju_enqueue_react_assets() {
    $build_path = get_template_directory() . '/dist';
    $build_url = get_template_directory_uri() . '/dist';
    
    // Enqueue CSS
    $css_files = glob($build_path . '/assets/*.css');
    foreach ($css_files as $css_file) {
        $css_filename = basename($css_file);
        wp_enqueue_style(
            'viju-' . pathinfo($css_filename, PATHINFO_FILENAME),
            $build_url . '/assets/' . $css_filename,
            array(),
            filemtime($css_file)
        );
    }
    
    // Enqueue JS
    $js_files = glob($build_path . '/assets/*.js');
    foreach ($js_files as $js_file) {
        $js_filename = basename($js_file);
        wp_enqueue_script(
            'viju-' . pathinfo($js_filename, PATHINFO_FILENAME),
            $build_url . '/assets/' . $js_filename,
            array(),
            filemtime($js_file),
            true
        );
    }
}
add_action('wp_enqueue_scripts', 'viju_enqueue_react_assets');

// Enable CORS for REST API
function add_cors_http_header(){
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
}
add_action('init','add_cors_http_header');

// Custom post types and REST API endpoints
require_once get_template_directory() . '/includes/custom-post-types.php';
require_once get_template_directory() . '/includes/rest-api.php';
?>
```

### Option 2: Subdirectory Installation

Deploy the React app to a subdirectory like `/shop/` or `/store/`.

#### Step 1: Build and Upload

```bash
# Build the application
npm run build:prod

# Upload dist/ contents to your-domain.com/shop/
```

#### Step 2: Configure WordPress

Add this to your WordPress theme's functions.php:

```php
// Redirect shop pages to React app
function redirect_to_react_shop() {
    if (is_page('shop') || strpos($_SERVER['REQUEST_URI'], '/shop/') === 0) {
        wp_redirect(home_url('/shop/'));
        exit;
    }
}
add_action('template_redirect', 'redirect_to_react_shop');
```

### Option 3: Headless WordPress Setup

Use WordPress as a headless CMS with the React app hosted separately.

#### Step 1: Configure WordPress for Headless

```php
// In functions.php
function configure_headless_wordpress() {
    // Remove unnecessary WordPress features
    remove_action('wp_head', 'wp_generator');
    remove_action('wp_head', 'wlwmanifest_link');
    remove_action('wp_head', 'rsd_link');
    
    // Enable REST API for all post types
    add_post_type_support('page', 'custom-fields');
    add_post_type_support('post', 'custom-fields');
}
add_action('init', 'configure_headless_wordpress');
```

#### Step 2: Deploy React App

Deploy to platforms like:
- Netlify
- Vercel
- AWS S3 + CloudFront
- Your own server

## Environment Configuration

### Production Environment Variables

Update `.env.production` with your WordPress details:

```env
VITE_WP_API_URL=https://your-wordpress-site.com/wp-json/wp/v2
VITE_WP_SITE_URL=https://your-wordpress-site.com
VITE_CURRENCY=NGN
VITE_CURRENCY_SYMBOL=₦
VITE_COUNTRY=NG
VITE_TIMEZONE=Africa/Lagos
```

### Nigerian Market Configuration

For the Nigerian market, ensure the following configurations:

#### Product Catalog Configuration
- Display Mode: View-only catalog (no e-commerce checkout)
- Product Information: Detailed specifications and descriptions
- Contact: Inquiry-based system for product requests
- Categories: Beverages, Juices, Dairy products

#### Contact and Inquiry System
Instead of direct purchasing, implement:
- Contact forms for product inquiries
- Phone/WhatsApp integration for customer service
- Email-based quotation system
- Regional distributor contact information

#### Update Display Components
Remove pricing and cart functionality from:
- `src/components/Ecommerce/ProductCard.tsx` (already updated)
- `src/pages/ProductDetail.tsx` (already updated)
- `src/components/Ecommerce/ShoppingCart.tsx` (can be disabled)
- `src/pages/Checkout.tsx` (can be removed from routes)

```javascript
// Example contact form integration
const handleProductInquiry = (product) => {
  window.open(`https://wa.me/2348161674349?text=Hi, I'm interested in ${product.title}`, '_blank');
};
```

#### Contact Integration
For Nigerian market, integrate with communication channels:
- WhatsApp Business API
- Email contact forms
- Phone number with country code (+234)
- Regional office contacts

```php
// WordPress contact integration
function setup_nigerian_contact_methods() {
    // WhatsApp integration
    add_option('whatsapp_number', '+2348161674349');
    add_option('business_phone', '+2348168108573');
    
    // Regional contacts
    add_option('lagos_office_phone', '+2348161674349');
    add_option('lagos_office_address', '1, Awose close Awosika Avenue, Off Sapara Street, Off Oba Akran road, Ikeja Industrial Estate, Ikeja, Lagos.');
    
    // Email contacts
    add_option('sales_email', 'info@vijufamily.com');
    add_option('support_email', 'info@vijufamily.com');
    add_option('careers_email', 'jonathanogbone@vijufamily.com');
}
```

### WordPress Configuration

Add to `wp-config.php`:

```php
// Enable CORS
define('CORS_ALLOW_ORIGIN', 'https://your-react-app-domain.com');

// JWT Authentication
define('JWT_AUTH_SECRET_KEY', 'your-super-secret-jwt-key');
define('JWT_AUTH_CORS_ENABLE', true);

// Nigerian market specific configurations
define('WP_CURRENCY', 'NGN');
define('WP_CURRENCY_SYMBOL', '₦');
define('WP_TAX_RATE', 0.075); // 7.5% VAT
define('WP_TIMEZONE', 'Africa/Lagos');

// Nigerian business settings
define('BUSINESS_COUNTRY', 'NG');
define('BUSINESS_STATE', 'Lagos');
define('DEFAULT_SHIPPING_ZONE', 'Lagos');
```

#### Nigerian Tax Configuration

```php
// Configure Nigerian VAT
function setup_nigerian_tax_rates() {
    // Standard VAT rate of 7.5%
    $tax_rate = array(
        'tax_rate_country'  => 'NG',
        'tax_rate_state'    => '',
        'tax_rate'          => '7.5000',
        'tax_rate_name'     => 'VAT',
        'tax_rate_priority' => '1',
        'tax_rate_compound' => '0',
        'tax_rate_shipping' => '1',
        'tax_rate_order'    => '0',
        'tax_rate_class'    => ''
    );
    
    WC_Tax::_insert_tax_rate($tax_rate);
#### Nigerian Shipping Configuration

```php
// Configure Nigerian shipping zones
function setup_nigerian_shipping_zones() {
    $shipping_zones = array(
        'Lagos' => array(
            'states' => array('Lagos'),
            'rate' => 1500, // ₦1,500 for Lagos
            'free_shipping_threshold' => 50000 // Free shipping above ₦50,000
        ),
        'Abuja' => array(
            'states' => array('FCT'),
            'rate' => 2000, // ₦2,000 for Abuja
            'free_shipping_threshold' => 50000
        ),
        'South West' => array(
            'states' => array('Ogun', 'Oyo', 'Osun', 'Ondo', 'Ekiti'),
            'rate' => 2500, // ₦2,500 for South West
            'free_shipping_threshold' => 60000
        ),
        'South East' => array(
            'states' => array('Anambra', 'Enugu', 'Imo', 'Abia', 'Ebonyi'),
            'rate' => 3000, // ₦3,000 for South East
            'free_shipping_threshold' => 60000
        ),
        'North Central' => array(
            'states' => array('Plateau', 'Nasarawa', 'Niger', 'Kwara', 'Kogi', 'Benue'),
            'rate' => 3500, // ₦3,500 for North Central
            'free_shipping_threshold' => 70000
        ),
        'North West' => array(
            'states' => array('Kano', 'Kaduna', 'Katsina', 'Zamfara', 'Sokoto', 'Kebbi', 'Jigawa'),
            'rate' => 4000, // ₦4,000 for North West
            'free_shipping_threshold' => 70000
        ),
        'North East' => array(
            'states' => array('Borno', 'Yobe', 'Bauchi', 'Gombe', 'Taraba', 'Adamawa'),
            'rate' => 4500, // ₦4,500 for North East
            'free_shipping_threshold' => 80000
        ),
        'South South' => array(
            'states' => array('Rivers', 'Cross River', 'Akwa Ibom', 'Bayelsa', 'Delta', 'Edo'),
            'rate' => 3500, // ₦3,500 for South South
            'free_shipping_threshold' => 70000
        )
    );
    
    foreach ($shipping_zones as $zone_name => $zone_data) {
        // Create shipping zone logic here
        update_option("shipping_zone_{$zone_name}", $zone_data);
    }
}
add_action('init', 'setup_nigerian_shipping_zones');
```

## Security Considerations

### 1. HTTPS Configuration

Ensure both WordPress and React app use HTTPS:

```apache
# .htaccess
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

### 2. Content Security Policy

Add CSP headers:

```php
function add_security_headers() {
    header("Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' fonts.gstatic.com; img-src 'self' data: https:;");
    header("X-Frame-Options: SAMEORIGIN");
    header("X-Content-Type-Options: nosniff");
}
add_action('send_headers', 'add_security_headers');
```

### 3. API Security

Implement rate limiting and authentication:

```php
// Rate limiting for REST API
function rest_api_rate_limit($result) {
    $ip = $_SERVER['REMOTE_ADDR'];
    $requests = get_transient('api_requests_' . $ip) ?: 0;
    
    if ($requests > 100) { // 100 requests per hour
        return new WP_Error('rate_limit_exceeded', 'Rate limit exceeded', array('status' => 429));
    }
    
    set_transient('api_requests_' . $ip, $requests + 1, HOUR_IN_SECONDS);
    return $result;
}
add_filter('rest_pre_dispatch', 'rest_api_rate_limit');
```

## Performance Optimization

### 1. Caching

Install caching plugins:
- WP Rocket
- W3 Total Cache
- WP Super Cache

### 2. CDN Configuration

Configure CDN for static assets:

```php
function cdn_rewrite_urls($content) {
    $cdn_url = 'https://cdn.your-domain.com';
    $site_url = get_site_url();
    
    return str_replace($site_url . '/wp-content/', $cdn_url . '/wp-content/', $content);
}
add_filter('the_content', 'cdn_rewrite_urls');
```

### 3. Database Optimization

Optimize WordPress database:

```sql
-- Remove unnecessary data
DELETE FROM wp_posts WHERE post_status = 'auto-draft';
DELETE FROM wp_comments WHERE comment_approved = 'spam';
OPTIMIZE TABLE wp_posts, wp_comments, wp_options;
```

## Testing Checklist

Before going live in the Nigerian market, test:

- [ ] All pages load correctly
- [ ] WordPress REST API endpoints work
- [ ] Product detail pages display information correctly (view-only mode)
- [ ] Product catalog browsing functionality
- [ ] Contact forms
- [ ] Mobile responsiveness (important for Nigerian mobile-first market)
- [ ] Dark/light mode switching
- [ ] Search functionality
- [ ] Product filtering
- [ ] User authentication (if implemented)
- [ ] Product sharing functionality
- [ ] Product image gallery
- [ ] Product specifications display
- [ ] Related products section
- [ ] Local phone number formats (+234)
- [ ] Lagos timezone handling
- [ ] Nigerian address format validation

**Note**: The application is configured as a catalog/showcase system without e-commerce checkout functionality. Product pages are for viewing and information only.

## Monitoring and Maintenance

### 1. Error Monitoring

Implement error tracking:

```javascript
// Add to your React app
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  environment: "production",
});
```

### 2. Analytics

Add Google Analytics with Nigerian market focus:

```javascript
// Google Analytics 4 with Nigerian market tracking
gtag('config', 'GA_MEASUREMENT_ID', {
  page_title: document.title,
  page_location: window.location.href,
  country: 'NG',
  currency: 'NGN',
  custom_map: {
    'custom_parameter_1': 'nigerian_region'
  }
});

// Track Nigerian specific events
gtag('event', 'purchase', {
  transaction_id: 'txn_123',
  value: 15000,
  currency: 'NGN',
  items: [{
    item_id: 'product_123',
    item_name: 'Orange Juice',
    category: 'beverages',
    quantity: 2,
    price: 7500
  }]
});
```

#### Nigerian Market Analytics

Track key metrics for the Nigerian market:
- Mobile vs desktop usage (Nigeria is mobile-first)
- Payment method preferences
- Regional sales distribution
- Currency conversion rates
- Local vs international traffic

### 3. Regular Updates

- Keep WordPress core updated
- Update plugins and themes
- Monitor security vulnerabilities
- Regular database backups
- Performance monitoring

## Troubleshooting

### Common Issues

1. **CORS Errors**: Ensure CORS headers are properly configured
2. **404 Errors**: Check .htaccess and permalink settings
3. **Slow Loading**: Optimize images and enable caching (crucial for Nigerian internet speeds)
4. **API Failures**: Verify WordPress REST API is enabled
5. **Currency Display Issues**: Ensure NGN currency formatting is correct
6. **Payment Gateway Errors**: Verify Paystack/Flutterwave API keys
7. **Tax Calculation**: Confirm 7.5% VAT is applied correctly
8. **Mobile Performance**: Optimize for Nigerian mobile users
9. **Timezone Issues**: Ensure Africa/Lagos timezone is set correctly
10. **Phone Number Validation**: Support +234 Nigerian format

### Support Resources

**Viju Family Contact Information:**
- **Address**: 1, Awose close Awosika Avenue, Off Sapara Street, Off Oba Akran road, Ikeja Industrial Estate, Ikeja, Lagos.
- **Email**: info@vijufamily.com
- **Hotlines**: +2348161674349, +2348168108573

**Technical Resources:**
- WordPress Codex: https://codex.wordpress.org/
- React Documentation: https://reactjs.org/docs/
- Vite Documentation: https://vitejs.dev/guide/

For additional support, contact the development team or refer to the project documentation.