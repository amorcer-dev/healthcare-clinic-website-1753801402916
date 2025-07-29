import React from 'react';
import { WidgetProfile } from '../components/WidgetProfile'
import { WidgetAboutDoctor } from '../components/WidgetAboutDoctor'
import { WidgetServicesAndConditions } from '../components/WidgetServicesAndConditions'
import { WidgetTestimonialCarousel } from '../components/WidgetTestimonialCarousel'

export default function Home() {
  return (
    <main className="min-h-screen">
      <WidgetProfile
        doctorName="Dr. Nathan Gelfand"
        specialty="Family Medicine"
        patients="2,500+"
        experience="10+ years"
        rating="4.9"
        imageSrc="/Storefront/Doctor Widget/DoctorImage.png"
        className=""
      />
      <WidgetAboutDoctor
        aboutText="Board-certified family physician with 10+ years of experience in telehealth and preventive care."
        education={[
        {
                "college": "Harvard Medical School",
                "activity": "MD"
        },
        {
                "college": "Johns Hopkins University",
                "activity": "Residency"
        }
]}
        hospitals={[
        "Massachusetts General Hospital",
        "Johns Hopkins Hospital"
]}
        certificates={[
        "Board Certified Family Medicine",
        "Telemedicine Certification"
]}
        languages={[
        "English",
        "Spanish",
        "French"
]}
        className=""
      />
      <WidgetServicesAndConditions
        specializedServices={[
        {
                "name": "Annual Physicals",
                "icon": "🏥"
        },
        {
                "name": "Chronic Disease Management",
                "icon": "🏥"
        },
        {
                "name": "Mental Health",
                "icon": "🏥"
        }
]}
        conditions={[
        "Diabetes",
        "Hypertension",
        "Depression",
        "Anxiety"
]}
        className=""
      />
      <WidgetTestimonialCarousel
        testimonials={[
        {
                "name": "Sarah J.",
                "age": 35,
                "condition": "Diabetes Management",
                "rating": 5,
                "quote": "Dr. Smith is amazing! Very thorough and caring."
        },
        {
                "name": "Mike C.",
                "age": 35,
                "condition": "Annual Physical",
                "rating": 5,
                "quote": "Convenient telehealth visits that actually work."
        },
        {
                "name": "Emily D.",
                "age": 35,
                "condition": "Mental Health",
                "rating": 5,
                "quote": "Professional, knowledgeable, and easy to talk to."
        }
]}
        overallRating="4.9"
        totalReviews="127"
        recommendedRate="98"
        className=""
      />
    </main>
  );
}