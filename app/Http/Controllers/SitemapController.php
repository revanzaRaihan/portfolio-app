<?php

namespace App\Http\Controllers;

use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;

class SitemapController extends Controller
{
    public function index()
    {
        $sitemap = Sitemap::create()
            ->add(Url::create('/')->setPriority(1.0)->setChangeFrequency('weekly'))
            ->add(Url::create('/about')->setPriority(0.8)->setChangeFrequency('monthly'))
            ->add(Url::create('/portfolio')->setPriority(0.8)->setChangeFrequency('weekly'))
            ->add(Url::create('/services')->setPriority(0.7)->setChangeFrequency('monthly'))
            ->add(Url::create('/contact')->setPriority(0.6)->setChangeFrequency('monthly'));

        return $sitemap->toResponse(request());
    }
}