export declare type ApiConfig = {
    countryCode?: CountryCode;
    apiVersion?: string;
    authKey?: string;
    url?: string;
};
export declare type CountryCode = "NL" | "DE";
export declare type ImageSize = "tiny" | "small" | "medium" | "large" | "extra-large";
export declare type LoginInput = {
    key: string;
    secret: string;
    client_id: number;
};
export declare type LoginResult = {
    user_id: string;
    second_factor_authentication_required: string;
    authKey: string;
};
export declare type Address = {
    house_number: number;
    house_number_ext: string;
    postcode: string;
    street: string;
    city: string;
    [x: string]: any;
};
export declare type Subscription = {
    list_id: string;
    subscribed: boolean;
    name: string;
    [x: string]: any;
};
export declare type HouseholdDetails = {
    adults: number;
    children: number;
    cats: number;
    dogs: number;
    author: string;
    last_edit_ts: number;
    [x: string]: any;
};
export declare type ConsentDecisions = {
    MISC_COMMERCIAL_ADS: boolean;
    PURCHASES_CATEGORY_CONSENT: boolean;
    MISC_COMMERCIAL_EMAILS: boolean;
    MISC_READ_ADVERTISING_ID: boolean;
    PERSONALIZED_RANKING_CONSENT: boolean;
    MISC_COMMERCIAL_MESSAGES: boolean;
    WEEKLY_COMMERCIAL_EMAILS: boolean;
    [x: string]: any;
};
export declare type User = {
    user_id: string;
    firstname: string;
    lastname: string;
    address: Address;
    phone: string;
    contact_email: string;
    feature_toggles: any[];
    push_subscriptions: Subscription[];
    subscriptions: Subscription[];
    customer_type: string;
    household_details: HouseholdDetails;
    check_general_consent: boolean;
    placed_order: boolean;
    received_delivery: boolean;
    total_deliveries: number;
    completed_deliveries: number;
    consent_decisions: ConsentDecisions;
    [x: string]: any;
};
export declare type Link = {
    type: string;
    href: string;
    [x: string]: any;
};
export declare type BasePriceDecorator = {
    type: "BASE_PRICE";
    base_price_text: string;
    [x: string]: any;
};
export declare type FreshLabelDecorator = {
    type: "FRESH_LABEL";
    period: string;
    [x: string]: any;
};
export declare type LabelDecorator = {
    type: "LABEL";
    text: string;
    [x: string]: any;
};
export declare type PriceDecorator = {
    type: "PRICE";
    display_price: number;
    [x: string]: any;
};
export declare type BackgroundImageDecorator = {
    type: "BACKGROUND_IMAGE";
    image_ids: string[];
    height_percent: number;
    [x: string]: any;
};
export declare type DeeplinkReference = {
    type: "DEEPLINK";
    target: string;
    [x: string]: any;
};
export declare type SubBanner = {
    banner_id: string;
    image_id: string;
    display_time: string;
    description: string;
    reference: DeeplinkReference;
    position: string;
    [x: string]: any;
};
export declare type BannersDecorator = {
    type: "BANNERS";
    height_percentage: number;
    banners: SubBanner[];
    [x: string]: any;
};
export declare type UnitQuantityDecorator = {
    type: "UNIT_QUANTITY";
    unit_quantity_text: string;
    [x: string]: any;
};
export declare type ValidityLabelDecorator = {
    type: "VALIDITY_LABEL";
    valid_until: string;
    [x: string]: any;
};
export declare type Position = {
    start_index: number;
    length: number;
    [x: string]: any;
};
export declare type Style = {
    position: Position;
    color: string;
    style: string;
    [x: string]: any;
};
export declare type TitleStyleDecorator = {
    type: "TITLE_STYLE";
    styles: Style[];
    [x: string]: any;
};
export declare type MoreButtonDecorator = {
    type: "MORE_BUTTON";
    link: Link;
    images: string[];
    sellable_item_count: number;
    [x: string]: any;
};
export declare type Explanation = {
    short_explanation: string;
    long_explanation: string;
    [x: string]: any;
};
export declare type Replacement = {
    type: "REPLACEMENT";
    id: string;
    decorators: Decorator[];
    name: string;
    display_price: number;
    price: number;
    image_id: string;
    max_count: number;
    unit_quantity: string;
    tags: any[];
    replacement_type: string;
    [x: string]: any;
};
export declare type UnavailableDecorator = {
    type: "UNAVAILABLE";
    reason: string;
    replacements: Replacement[];
    explanation: Explanation;
    [x: string]: any;
};
export declare type FailureReason = "PRODUCT_ABSENT" | "PRODUCT_LOW_QUALITY" | "PRODUCT_NOT_SHIPPED" | string;
export declare type ArticleDeliveryFailureDecorator = {
    type: "ARTICLE_DELIVERY_FAILURES";
    failures: {
        [x: string]: FailureReason[];
    };
    prices: {
        [x: string]: number;
    };
    [x: string]: any;
};
export declare type ImmutableDecorator = {
    type: "IMMUTABLE";
    [x: string]: any;
};
export declare type Decorator = BasePriceDecorator | FreshLabelDecorator | LabelDecorator | PriceDecorator | BackgroundImageDecorator | BannersDecorator | UnitQuantityDecorator | ValidityLabelDecorator | TitleStyleDecorator | MoreButtonDecorator | UnavailableDecorator | ImmutableDecorator | ArticleDeliveryFailureDecorator | any;
export declare type SingleArticle = {
    type: "SINGLE_ARTICLE";
    id: string;
    decorators: Decorator[];
    name: string;
    display_price: number;
    price: number;
    image_id: string;
    max_count: number;
    unit_quantity: string;
    unit_quantity_sub: string;
    tags: any[];
    [x: string]: any;
};
export declare type ItemSuggestionCatalog = {
    type: "ITEM_SUGGESTION_DIALOG";
    id: string;
    [x: string]: any;
};
export declare type SearchResultItem = SingleArticle | ItemSuggestionCatalog | any;
export declare type SearchResult = {
    type: string;
    id: string;
    links: Link[];
    name: string;
    items: SearchResultItem[];
    level: number;
    is_included_in_category_tree: boolean;
    hidden: boolean;
    [x: string]: any;
};
export declare type SearchSuggestion = {
    type: "SEARCH_SUGGESTION";
    id: string;
    links: Link[];
    suggestion: string;
    [x: string]: any;
};
export declare type SuggestionResult = SearchSuggestion | any;
export declare type FreshLabel = {
    unit: string;
    number: number;
    [x: string]: any;
};
export declare type NutritionalSubValue = {
    name: string;
    value: string;
    gda_percentage: string;
    [x: string]: any;
};
export declare type NutritionalValue = {
    name: string;
    value: string;
    gda_percentage: string;
    sub_values: NutritionalSubValue[];
    [x: string]: any;
};
export declare type DetailPageSubSection = {
    type: string;
    id: string;
    title: string;
    text: string;
    [x: string]: any;
};
export declare type DetailPageSection = {
    type: string;
    id: string;
    title: string;
    items: DetailPageSubSection[];
    [x: string]: any;
};
export declare type SingleArticleDetailsItem = DetailPageSection | any;
export declare type SingleArticleDetails = SingleArticle & {
    type: "SINGLE_ARTICLE_DETAILS";
    product_id: string;
    description: string;
    canonical_name: string | null;
    image_ids: string[];
    fresh_label: FreshLabel;
    nutritional_values: NutritionalValue[];
    ingredients_blob: string;
    additional_info: string;
    label_holder: string;
    original_price: number;
    items: SingleArticleDetailsItem[];
    nutritional_info_unit: string;
    [x: string]: any;
};
export declare type PromoLabel = {
    label: string;
    valid_until: string;
    [x: string]: any;
};
export declare type ProductSummary = {
    current_count: number;
    max_count: number;
    price: number;
    original_price: number;
    promo_label: PromoLabel;
    name: string;
    fresh_label: FreshLabel;
    unit_quantity: string;
    unit_quantity_sub: string;
    image_id: string;
    deposit: number;
    product_id: string;
    [x: string]: any;
};
export declare type ProductResult = {
    product_details: SingleArticleDetails;
    products: any[];
    [x: string]: any;
};
export declare type SubCategory = {
    type: "CATEGORY";
    id: string;
    decorators: Decorator[];
    links: Link[];
    name: string;
    items: Category[];
    level: number;
    is_included_in_category_tree: boolean;
    hidden: boolean;
    [x: string]: any;
};
export declare type Category = {
    type: "CATEGORY";
    id: string;
    decorators: Decorator[];
    links: Link[];
    name: string;
    items: SubCategory[];
    level: number;
    is_included_in_category_tree: boolean;
    hidden: boolean;
    [x: string]: any;
};
export declare type TemplatedContent = {
    type: "TEMPLATED_CONTENT";
    template_id: string;
    version_id: string;
    version_name: string;
    content: string;
    parameters: string[];
    actions: string[];
    [x: string]: any;
};
export declare type Content = {
    type: "CONTENT";
    id: string;
    display_position: string;
    payload: TemplatedContent;
    [x: string]: any;
};
export declare type DisplayPositionContent = {
    type: "DISPLAY_POSITION_CONTENTS";
    id: string;
    links: Link[];
    display_position: string;
    items: Content[];
    [x: string]: any;
};
export declare type MyStore = {
    type: "MY_STORE";
    catalog: Category[];
    content: DisplayPositionContent[];
    user: User;
    first_time_user: boolean;
    landing_page_hint: string;
    id: string;
    links: Link[];
    [x: string]: any;
};
export declare type OrderArticle = {
    type: "ORDER_ARTICLE";
    id: string;
    name: string;
    image_ids: string[];
    unit_quantity: string;
    price: number;
    max_count: number;
    perishable: boolean;
    tags: any[];
    decorators: Decorator[];
    unit_quantity_sub?: string;
    [x: string]: any;
};
export declare type OrderLine = {
    type: "ORDER_LINE";
    id: string;
    items: OrderArticle[];
    display_price: number;
    price: number;
    [x: string]: any;
};
export declare type Source = {
    id: string;
    [x: string]: any;
};
export declare type ImageComponent = {
    type: string;
    source: Source;
    width: number;
    height: number;
    resize_mode: string;
    [x: string]: any;
};
export declare type IconImages = {
    "image-id": string;
    [x: string]: any;
};
export declare type TrackingAttributes = {
    template_variant_id: string;
    entity_ids: string[];
    [x: string]: any;
};
export declare type Icon = {
    pml_version: string;
    component: ImageComponent;
    images: IconImages;
    tracking_attributes: TrackingAttributes;
    [x: string]: any;
};
export declare type DeliverySlot = {
    slot_id: string;
    hub_id: string;
    fc_id: string;
    window_start: string;
    window_end: string;
    cut_off_time: string;
    is_available: boolean;
    selected: boolean;
    reserved: boolean;
    minimum_order_value: number;
    icon?: Icon;
    unavailability_reason: "CLOSED" | string;
    [x: string]: any;
};
export declare type SelectedSlot = {
    slot_id: string;
    state: string;
    [x: string]: any;
};
export declare type StackComponent = {
    type: "STACK";
    axis?: string;
    alignment: string;
    spacing: string;
    padding_vertical?: number;
    children?: Component[];
    child?: Component;
    [x: string]: any;
};
export declare type ContainerComponent = {
    type: "CONTAINER";
    border_width: number;
    border_radius: number;
    border_color: string;
    background_color: string;
    width: number;
    height: number;
    children?: Component[];
    child?: Component;
    [x: string]: any;
};
export declare type RichTextComponent = {
    type: "RICH_TEXT";
    text_type: string;
    text_alignment: string;
    markdown: string;
    [x: string]: any;
};
export declare type Component = StackComponent | ContainerComponent | ImageComponent | RichTextComponent | any;
export declare type SlotSelectorMessage = {
    pml_version: string;
    component: Component;
    images: {
        icon: string;
    };
    tracking_attributes: TrackingAttributes;
    [x: string]: any;
};
export declare type DepositBreakdown = {
    type: "BAG" | "DEFAULT" | string;
    value: number;
    count: number;
    [x: string]: any;
};
export declare type Order = {
    type: "ORDER";
    id: string;
    items: OrderLine[];
    delivery_slots: DeliverySlot[];
    selected_slot: SelectedSlot;
    slot_selector_message: SlotSelectorMessage;
    total_count: number;
    total_price: number;
    checkout_total_price: number;
    mts: number;
    deposit_breakdown: (DepositBreakdown | any)[];
    total_savings: number;
    total_deposit: number;
    cancellable: boolean;
    creation_time: string;
    status: DeliveryStatus;
    decorator_overrides: {
        [key: string]: Decorator[];
    };
    cancellation_time: string | null;
    [x: string]: any;
};
export declare type AddProductInput = {
    product_id: string;
    count: number;
    [x: string]: any;
};
export declare type GetDeliverySlotsResult = {
    delivery_slots: DeliverySlot[];
    slot_selector_message: SlotSelectorMessage;
    selected_slot: SelectedSlot;
    [x: string]: any;
};
export declare type SetDeliverySlotInput = {
    slot_id: string;
    [x: string]: any;
};
export declare type DeliveryStatus = "CURRENT" | "COMPLETED" | "CANCELLED" | string;
export declare type DeliveryTime = {
    start: string;
    end: string;
    [x: string]: any;
};
export declare type ReturnContainer = {
    type: "BAG" | "BEER_BOTTLE" | "DISPOSABLE" | "NESPRESSO_BAG" | string;
    localized_name: string;
    quantity: number;
    price: number;
    [x: string]: any;
};
export declare type Delivery = {
    type: "DELIVERY";
    id: string;
    delivery_id: string;
    creation_time: string;
    slot: DeliverySlot;
    eta2: DeliveryTime;
    status: DeliveryStatus;
    delivery_time: DeliveryTime;
    orders: Order[];
    returned_containers: ReturnContainer[];
    parcels: any[];
    [x: string]: any;
};
export declare type Vehicle = {
    image: string;
    [x: string]: any;
};
export declare type Scenario = {
    ts: string;
    lng: string;
    lat: string;
    [x: string]: any;
};
export declare type DeliveryScenario = {
    scenario: Scenario[];
    vehicle: Vehicle;
    [x: string]: any;
};
export declare type DeliveryPosition = {
    scenario_ts: string;
    [x: string]: any;
};
export declare type OrderStatus = {
    checkout_status: "FINISHED" | string;
    [x: string]: any;
};
export declare type MgmDetails = {
    mgm_code: string;
    invitee_value: number;
    inviter_value: number;
    share_url: string;
    amount_earned: number;
    [x: string]: any;
};
export declare type ConsentSettingText = {
    title: string;
    text: string;
    dissent_text: string;
    timestamp: string;
    [x: string]: any;
};
export declare type ConsentSetting = {
    type: string;
    id: string;
    text_id: string;
    text_locale: string;
    text: ConsentSettingText;
    established_decision: boolean;
    initial_state: boolean;
    [x: string]: any;
};
export declare type ConsentDeclaration = {
    consent_request_text_id: string;
    consent_request_locale: string;
    agreement: boolean;
    [x: string]: any;
};
export declare type SetConsentSettingsInput = {
    consent_declarations: ConsentDeclaration[];
};
export declare type SetConsentSettingsResult = {
    consent_request_text_ids: string[];
};
//# sourceMappingURL=picnic-api.d.ts.map