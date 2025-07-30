# WordPress Setup Guide for Viju Industries

This guide will help you set up WordPress as a headless CMS for the Viju Industries React application.

## Prerequisites

- WordPress 5.0 or higher
- PHP 7.4 or higher
- MySQL 5.7 or higher
- SSL certificate (recommended)

## Step 1: WordPress Installation

1. Install WordPress on your server
2. Complete the basic WordPress setup
3. Install SSL certificate for HTTPS

## Step 2: Enable REST API

The WordPress REST API is enabled by default in WordPress 5.0+. Verify it's working by visiting:
```
https://your-site.com/wp-json/wp/v2/
```

## Step 3: Install Required Plugins

### Essential Plugins:

1. **Advanced Custom Fields (ACF) Pro**
   - For custom fields on products, vacancies, etc.
   - Download from: https://www.advancedcustomfields.com/

2. **Contact Form 7**
   - For contact form handling
   - Install from WordPress admin

3. **JWT Authentication for WP REST API**
   - For secure API authentication
   - Install from WordPress admin

4. **WP REST API Controller**
   - For enhanced REST API functionality
   - Install from WordPress admin

### Optional Plugins:

1. **Yoast SEO** - For SEO optimization
2. **WP Super Cache** - For caching
3. **Wordfence Security** - For security

## Step 4: Configure CORS

Add this to your theme's `functions.php` file:

```php
<?php
// Enable CORS for REST API
function add_cors_http_header(){
    // Allow specific origins in production
    $allowed_origins = [
        'http://localhost:3000',
        'https://your-react-app.com'
    ];
    
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    
    if (in_array($origin, $allowed_origins)) {
        header("Access-Control-Allow-Origin: $origin");
    }
    
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
    header("Access-Control-Allow-Credentials: true");
}
add_action('init', 'add_cors_http_header');

// Handle preflight requests
function handle_preflight() {
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        add_cors_http_header();
        exit(0);
    }
}
add_action('init', 'handle_preflight');
?>
```

## Step 5: Create Custom Post Types

Add this to your theme's `functions.php` file:

```php
<?php
// Register Products Custom Post Type
function create_products_post_type() {
    register_post_type('products',
        array(
            'labels' => array(
                'name' => 'Products',
                'singular_name' => 'Product',
            ),
            'public' => true,
            'has_archive' => true,
            'show_in_rest' => true,
            'rest_base' => 'products',
            'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
            'menu_icon' => 'dashicons-products',
        )
    );
}
add_action('init', 'create_products_post_type');

// Register Vacancies Custom Post Type
function create_vacancies_post_type() {
    register_post_type('vacancies',
        array(
            'labels' => array(
                'name' => 'Vacancies',
                'singular_name' => 'Vacancy',
            ),
            'public' => true,
            'has_archive' => true,
            'show_in_rest' => true,
            'rest_base' => 'vacancies',
            'supports' => array('title', 'editor', 'thumbnail'),
            'menu_icon' => 'dashicons-businessman',
        )
    );
}
add_action('init', 'create_vacancies_post_type');

// Register Activities Custom Post Type
function create_activities_post_type() {
    register_post_type('activities',
        array(
            'labels' => array(
                'name' => 'Activities',
                'singular_name' => 'Activity',
            ),
            'public' => true,
            'has_archive' => true,
            'show_in_rest' => true,
            'rest_base' => 'activities',
            'supports' => array('title', 'editor', 'thumbnail'),
            'menu_icon' => 'dashicons-calendar-alt',
        )
    );
}
add_action('init', 'create_activities_post_type');
?>
```

## Step 6: Configure Advanced Custom Fields

### Product Fields:
1. Create field group "Product Details"
2. Add fields:
   - Price (Number)
   - Category (Select: juices, beverages, dairy)
   - Features (Repeater)
   - Nutritional Info (Textarea)

### Vacancy Fields:
1. Create field group "Vacancy Details"
2. Add fields:
   - Department (Text)
   - Location (Text)
   - Job Type (Select: full-time, part-time, contract)
   - Requirements (Repeater)
   - Salary Range (Text)

### Activity Fields:
1. Create field group "Activity Details"
2. Add fields:
   - Event Date (Date Picker)
   - Location (Text)
   - Participants (Number)
   - Duration (Text)
   - Status (Select: upcoming, completed)

## Step 7: Set Up Contact Form 7

1. Create a new contact form in Contact Form 7
2. Note the form ID (usually 1 for the first form)
3. Configure form fields to match React form structure

## Step 8: Configure JWT Authentication

1. Add JWT secret to `wp-config.php`:
```php
define('JWT_AUTH_SECRET_KEY', 'your-top-secret-key');
define('JWT_AUTH_CORS_ENABLE', true);
```

2. Add authentication endpoints to `.htaccess`:
```apache
RewriteEngine On
RewriteCond %{HTTP:Authorization} ^(.*)
RewriteRule ^(.*) - [E=HTTP_AUTHORIZATION:%1]
```

## Step 9: Create Custom REST API Endpoints

Add to your theme's `functions.php`:

```php
<?php
// Custom endpoint for distributor registration
function register_distributor_endpoint() {
    register_rest_route('custom/v1', '/distributor-registration', array(
        'methods' => 'POST',
        'callback' => 'handle_distributor_registration',
        'permission_callback' => '__return_true',
    ));
}
add_action('rest_api_init', 'register_distributor_endpoint');

function handle_distributor_registration($request) {
    $data = $request->get_json_params();
    
    // Process distributor registration
    // Save to database, send emails, etc.
    
    return new WP_REST_Response(array(
        'success' => true,
        'message' => 'Registration submitted successfully'
    ), 200);
}

// Custom endpoint for newsletter subscription
function register_newsletter_endpoint() {
    register_rest_route('custom/v1', '/newsletter', array(
        'methods' => 'POST',
        'callback' => 'handle_newsletter_subscription',
        'permission_callback' => '__return_true',
    ));
}
add_action('rest_api_init', 'register_newsletter_endpoint');

function handle_newsletter_subscription($request) {
    $data = $request->get_json_params();
    $email = sanitize_email($data['email']);
    
    // Process newsletter subscription
    // Add to mailing list, send confirmation email, etc.
    
    return new WP_REST_Response(array(
        'success' => true,
        'message' => 'Subscription successful'
    ), 200);
}
?>
```

## Step 10: Security Configuration

1. **Limit REST API access** (optional):
```php
// Restrict REST API to authenticated users only
function restrict_rest_api_access($result) {
    if (!is_user_logged_in()) {
        return new WP_Error('rest_not_logged_in', 'You are not currently logged in.', array('status' => 401));
    }
    return $result;
}
add_filter('rest_authentication_errors', 'restrict_rest_api_access');
```

2. **Rate limiting** (recommended):
Install a rate limiting plugin or implement custom rate limiting.

3. **Input validation**:
Always validate and sanitize input data in custom endpoints.

## Step 11: Testing the Setup

1. Test REST API endpoints:
   - `GET /wp-json/wp/v2/posts`
   - `GET /wp-json/wp/v2/products`
   - `GET /wp-json/wp/v2/vacancies`

2. Test CORS by making requests from your React app

3. Test custom endpoints:
   - `POST /wp-json/custom/v1/distributor-registration`
   - `POST /wp-json/custom/v1/newsletter`

## Step 12: Performance Optimization

1. **Enable caching**:
   - Install WP Super Cache or similar
   - Configure object caching if available

2. **Optimize images**:
   - Install image optimization plugin
   - Use WebP format when possible

3. **Database optimization**:
   - Regular database cleanup
   - Optimize database tables

## Environment Variables

Update your React app's `.env` file:

```env
REACT_APP_WP_API_URL=https://your-wordpress-site.com/wp-json/wp/v2
REACT_APP_WP_SITE_URL=https://your-wordpress-site.com
REACT_APP_CONTACT_FORM_ID=1
```

## Troubleshooting

### Common Issues:

1. **CORS errors**:
   - Verify CORS headers are properly set
   - Check allowed origins configuration

2. **404 errors on custom post types**:
   - Flush permalinks in WordPress admin
   - Verify `show_in_rest` is set to true

3. **Authentication issues**:
   - Check JWT configuration
   - Verify secret key is set correctly

4. **Slow API responses**:
   - Enable caching
   - Optimize database queries
   - Use CDN for media files

### Debug Mode:

Enable WordPress debug mode in `wp-config.php`:
```php
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);
```

## Maintenance

1. **Regular updates**:
   - Keep WordPress core updated
   - Update plugins and themes
   - Monitor security advisories

2. **Backups**:
   - Set up automated backups
   - Test backup restoration process

3. **Monitoring**:
   - Monitor API response times
   - Set up uptime monitoring
   - Track error rates

## Support

For additional support:
- WordPress Codex: https://codex.wordpress.org/
- REST API Handbook: https://developer.wordpress.org/rest-api/
- Advanced Custom Fields Documentation: https://www.advancedcustomfields.com/resources/