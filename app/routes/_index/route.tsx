import type { MetaFunction } from '@remix-run/react';
import { CategoryLink } from '../../../src/components/category-link/category-link';
import { FeaturedProductsSection } from '../../../src/components/featured-products-section/featured-products-section';
import { LabelWithArrow } from '../../../src/components/label-with-arrow/label-with-arrow';
import { BackgroundParallax, FadeIn, FloatIn } from '../../../src/components/visual-effects';

export default function HomePage() {
    return (
        <div>
            <div className="heroBanner">
                <img
                    src="./banner4fin.webp"
                    className="heroBannerImage"
                    alt=""
                />
                <div className="heroBannerOverlay">
                    <div className="heroBannerSubtitle">ReClaim</div>
                    <h1 className="heroBannerTitle">Reuse. Repurpose. Relove.</h1>
                    <CategoryLink categorySlug="aa-all-products">
                        <LabelWithArrow>Shop Collections</LabelWithArrow>
                    </CategoryLink>
                </div>
            </div>

            <div className="textBannerSection">
                <FadeIn className="textBanner" duration={1.8}>
                    <div className="textBannerSubtitle">Products of the highest standards</div>
                    <div className="textBannerTitle">
                        Essential home collections for sustainable living
                    </div>
                    <CategoryLink categorySlug="aa-all-products">
                        <LabelWithArrow>Shop Collections</LabelWithArrow>
                    </CategoryLink>
                </FadeIn>
            </div>

            <div className="cardsSection">
                <CategoryLink categorySlug="kitchen-essentials" className="linkCard">
                    <img
                        className="linkCardBackground"
                        src="https://static.wixstatic.com/media/c837a6_c05a03f48fbd49e7b5046d1b18c930eb~mv2.jpg/v1/fill/w_547,h_730,q_90/c837a6_c05a03f48fbd49e7b5046d1b18c930eb~mv2.jpg"
                        alt=""
                    />
                    <div className="linkCardTitle">Kitchen</div>
                </CategoryLink>
                <CategoryLink categorySlug="bath" className="linkCard">
                    <img
                        className="linkCardBackground"
                        src="https://static.wixstatic.com/media/c837a6_269f35d6ccff4321b7ed1e65c2835c61~mv2.jpg/v1/fill/w_548,h_730,q_90/c837a6_269f35d6ccff4321b7ed1e65c2835c61~mv2.jpg"
                        alt=""
                    />
                    <div className="linkCardTitle">Bath</div>
                </CategoryLink>
                <CategoryLink categorySlug="on-the-go" className="linkCard">
                    <img
                        className="linkCardBackground"
                        src="https://static.wixstatic.com/media/c837a6_d38d8d08196d477ba49efff880d5b918~mv2.jpg/v1/fill/w_547,h_730,q_90/c837a6_d38d8d08196d477ba49efff880d5b918~mv2.jpg"
                        alt=""
                    />
                    <div className="linkCardTitle">On the Go</div>
                </CategoryLink>
            </div>

            <FeaturedProductsSection
                className="alternateBackground"
                categorySlug="new-in"
                title="New In"
                description="Embrace a sustainable lifestyle with our newest drop-ins."
                productCount={4}
            />

            <BackgroundParallax
                className="floatingCardBackground"
                backgroundImageUrl="https://static.wixstatic.com/media/c837a6_cae4dbe5a7ee4637b7d55d9bd5bd755d~mv2.png/v1/fill/w_1178,h_974,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_cae4dbe5a7ee4637b7d55d9bd5bd755d~mv2.png"
                parallaxStrength={0.75}
            >
                <FloatIn direction="up" duration={1.2} distance={120}>
                    <div className="floatingCard">
                        <div className="floatingCardHeader">Happy Holidays</div>
                        <div className="floatingCardContent">
                            <h2 className="floatingCardTitle">The holidays best sellers</h2>
                            <div className="floatingCardDescription">
                                Home essentials for
                                <br /> sustainable living
                            </div>
                        </div>
                        <CategoryLink categorySlug="aa-all-products">
                            <LabelWithArrow>Buy a gift</LabelWithArrow>
                        </CategoryLink>
                    </div>
                </FloatIn>
            </BackgroundParallax>

            <FeaturedProductsSection
                categorySlug="best-sellers"
                title="Best Sellers"
                description="When quality is eco-friendly. Explore our top picks."
                productCount={4}
            />
        </div>
    );
}

export const meta: MetaFunction = () => {
    const title = "ReClaim: Home Goods Store";
    const description = "Essential home products for sustainable living";

    return [
        { title },
        {
            name: "description",
            content: description,
        },
        {
            property: "robots",
            content: "index, follow",
        },
        {
            property: "og:title",
            content: title,
        },
        {
            property: "og:description",
            content: description,
        },
        {
            property: "og:image",
            content: "/social-media-image.jpg",
        },
    ];
};
