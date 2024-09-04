export const AdminIcon = ({
  width = 20,
  height = 20,
  fill = "none",
  color = "#98A2B3",
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.6667 18.3335V14.1668C16.6667 12.5955 16.6667 11.8098 16.1785 11.3217C15.6903 10.8335 14.9047 10.8335 13.3333 10.8335L10 18.3335L6.66667 10.8335C5.09532 10.8335 4.30964 10.8335 3.82149 11.3217C3.33333 11.8098 3.33333 12.5955 3.33333 14.1668V18.3335"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 12.4999L9.58333 15.8333L10 17.0833L10.4167 15.8333L10 12.4999ZM10 12.4999L9.16667 10.8333H10.8333L10 12.4999Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.9167 5.41675V4.58342C12.9167 2.97259 11.6108 1.66675 10 1.66675C8.38917 1.66675 7.08333 2.97259 7.08333 4.58342V5.41675C7.08333 7.02758 8.38917 8.3334 10 8.3334C11.6108 8.3334 12.9167 7.02758 12.9167 5.41675Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const HomeIcon = ({ color = "#98A2B3" }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.9121 1.98757C10.7644 1.18416 9.23674 1.18416 8.089 1.98757L2.35769 5.99949C1.39217 6.67535 0.855321 7.81083 0.945713 8.98592L1.53323 16.6236C1.64403 18.0641 2.9492 19.1111 4.37942 18.9068L7.02076 18.5294C8.25239 18.3535 9.16721 17.2987 9.16721 16.0545V15C9.16721 14.5398 9.54031 14.1667 10.0005 14.1667C10.4608 14.1667 10.8339 14.5398 10.8339 15V16.0545C10.8339 17.2987 11.7487 18.3535 12.9803 18.5294L15.6217 18.9068C17.0519 19.1111 18.3571 18.0641 18.4679 16.6236L19.0554 8.98592C19.1458 7.81083 18.6089 6.67535 17.6434 5.99949L11.9121 1.98757ZM9.04477 3.35296C9.61864 2.95125 10.3824 2.95125 10.9563 3.35296L16.6876 7.36488C17.1704 7.70281 17.4388 8.27055 17.3936 8.85809L16.8061 16.4958C16.7692 16.976 16.3341 17.3249 15.8574 17.2568L13.216 16.8795C12.8055 16.8209 12.5005 16.4693 12.5005 16.0545V15C12.5005 13.6193 11.3813 12.5 10.0005 12.5C8.61983 12.5 7.50054 13.6193 7.50054 15V16.0545C7.50054 16.4693 7.1956 16.8209 6.78506 16.8795L4.14372 17.2568C3.66698 17.3249 3.23192 16.976 3.19499 16.4958L2.60747 8.85809C2.56227 8.27055 2.8307 7.70281 3.31346 7.36488L9.04477 3.35296Z"
        fill={color}
      />
    </svg>
  );
};

export const TransactionIcon = ({ color = "#98A2B3" }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.83333 14.1666V10.8333"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M10 14.1666V5.83325"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M14.1667 14.1667V9.16675"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M2.08333 9.99992C2.08333 6.26797 2.08333 4.40199 3.2427 3.24262C4.40207 2.08325 6.26805 2.08325 10 2.08325C13.7319 2.08325 15.5979 2.08325 16.7573 3.24262C17.9167 4.40199 17.9167 6.26797 17.9167 9.99992C17.9167 13.7318 17.9167 15.5978 16.7573 16.7573C15.5979 17.9166 13.7319 17.9166 10 17.9166C6.26805 17.9166 4.40207 17.9166 3.2427 16.7573C2.08333 15.5978 2.08333 13.7318 2.08333 9.99992Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const UsersIcon = ({ color = "#98A2B3" }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.3116 15C17.936 15 18.4327 14.6071 18.8786 14.0576C19.7915 12.9328 18.2927 12.034 17.721 11.5938C17.1399 11.1463 16.4911 10.8928 15.8332 10.8333M14.9999 9.16667C16.1505 9.16667 17.0832 8.23392 17.0832 7.08333C17.0832 5.93274 16.1505 5 14.9999 5"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M2.68825 15C2.06383 15 1.56718 14.6071 1.12123 14.0576C0.208358 12.9328 1.70718 12.034 2.27882 11.5938C2.85993 11.1463 3.50877 10.8928 4.16662 10.8333M4.58329 9.16667C3.43269 9.16667 2.49995 8.23392 2.49995 7.08333C2.49995 5.93274 3.43269 5 4.58329 5"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M6.7364 12.5927C5.88492 13.1192 3.65238 14.1943 5.01215 15.5396C5.67638 16.1967 6.41617 16.6667 7.34625 16.6667H12.6536C13.5837 16.6667 14.3234 16.1967 14.9877 15.5396C16.3474 14.1943 14.1149 13.1192 13.2634 12.5927C11.2667 11.3581 8.73308 11.3581 6.7364 12.5927Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.9166 6.24992C12.9166 7.86075 11.6107 9.16659 9.99992 9.16659C8.38908 9.16659 7.08323 7.86075 7.08323 6.24992C7.08323 4.63909 8.38908 3.33325 9.99992 3.33325C11.6107 3.33325 12.9166 4.63909 12.9166 6.24992Z"
        stroke={color}
        stroke-width="1.5"
      />
    </svg>
  );
};

export const ReportIcon = ({ color = "#98A2B3" }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.08333 9.99992C2.08333 6.26797 2.08333 4.40199 3.2427 3.24262C4.40207 2.08325 6.26805 2.08325 10 2.08325C13.732 2.08325 15.5979 2.08325 16.7573 3.24262C17.9167 4.40199 17.9167 6.26797 17.9167 9.99992C17.9167 13.7319 17.9167 15.5978 16.7573 16.7572C15.5979 17.9166 13.732 17.9166 10 17.9166C6.26805 17.9166 4.40207 17.9166 3.2427 16.7572C2.08333 15.5978 2.08333 13.7319 2.08333 9.99992Z"
        stroke={color}
        stroke-width="1.5"
      />
      <path
        d="M10.2018 14.1665V9.99984C10.2018 9.607 10.2018 9.41058 10.0798 9.28854C9.95774 9.1665 9.76133 9.1665 9.36849 9.1665"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.99333 6.6665H10.0008"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const ServiceIcon = ({ color = "#98A2B3" }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.76046 16.2389C5.85415 18.2329 8.34666 17.4353 9.34366 16.6277C9.8595 16.2099 10.0914 15.9398 10.2907 15.7404C10.9887 15.0923 10.9438 14.4443 10.4902 13.9259C10.3087 13.7184 9.14425 12.5999 8.02761 11.4533C7.44935 10.875 7.05055 10.4663 6.70957 10.1373C6.25295 9.68212 5.85415 9.1602 5.25595 9.17512C4.7076 9.17512 4.30881 9.6587 3.81031 10.1572C3.23685 10.7306 2.81331 11.4533 2.66376 12.1014C2.21511 13.9956 2.91301 15.3415 3.76046 16.2389ZM3.76046 16.2389L1.66676 18.3325"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M16.2389 3.76216C14.1447 1.76721 11.6607 2.57984 10.6635 3.3878C10.1475 3.80583 9.91558 4.07605 9.71608 4.27555C9.018 4.92391 9.06292 5.57226 9.51667 6.09095C9.58192 6.16557 9.77433 6.35802 10.0458 6.62724M16.2389 3.76216C17.0867 4.65989 17.794 6.02112 17.3452 7.91632C17.1956 8.56465 16.772 9.28765 16.1983 9.8614C15.6997 10.3601 15.3008 10.8439 14.7523 10.8439C14.1539 10.8589 13.8434 10.4261 13.3867 9.97081M16.2389 3.76216L18.3332 1.66748M10.0458 6.62724C10.5296 7.10682 11.2646 7.83 11.9799 8.56465C12.5583 9.14331 13.0456 9.64165 13.3867 9.97081M10.0458 6.62724L8.7595 7.92164M13.3867 9.97081L12.0853 11.2412"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};

export const RateIcon = ({ color = "#98A2B3" }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.19012 10.5613H6.80765C5.57121 10.5613 4.95298 10.5613 4.68947 10.1537C4.42595 9.74608 4.67703 9.17817 5.1792 8.04236L6.6889 4.62769C7.14548 3.595 7.37377 3.07865 7.81664 2.78932C8.25952 2.5 8.82159 2.5 9.94584 2.5H11.687C13.0527 2.5 13.7355 2.5 13.993 2.94613C14.2506 3.39225 13.9118 3.98823 13.2343 5.18019L12.341 6.75157C12.0042 7.34413 11.8358 7.64041 11.8381 7.88293C11.8412 8.19813 12.0088 8.4885 12.2795 8.6475C12.4878 8.76992 12.8273 8.76992 13.5062 8.76992C14.3644 8.76992 14.7936 8.76992 15.0171 8.9185C15.3074 9.1115 15.4594 9.45683 15.4062 9.80267C15.3652 10.0688 15.0765 10.388 14.4992 11.0264L9.88659 16.1269C8.98059 17.1288 8.52758 17.6297 8.22339 17.4712C7.91919 17.3126 8.06528 16.6518 8.35742 15.3302L8.92975 12.7413C9.15217 11.735 9.26342 11.2318 8.99592 10.8966C8.72842 10.5613 8.21564 10.5613 7.19012 10.5613Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const SettingsIcon = ({ color = "#98A2B3" }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.99948 5.00007C7.23806 5.00007 4.99948 7.23864 4.99948 10.0001C4.99948 12.7615 7.23806 15.0001 9.99948 15.0001C12.7609 15.0001 14.9995 12.7615 14.9995 10.0001C14.9995 7.23864 12.7609 5.00007 9.99948 5.00007ZM6.66615 10.0001C6.66615 8.15912 8.15854 6.66673 9.99948 6.66673C11.8404 6.66673 13.3328 8.15912 13.3328 10.0001C13.3328 11.841 11.8404 13.3334 9.99948 13.3334C8.15854 13.3334 6.66615 11.841 6.66615 10.0001Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.0843 1.69082C10.9219 0.566277 9.07708 0.566277 7.91464 1.69082C7.61939 1.97644 7.20885 2.10984 6.8021 2.0523C5.20069 1.82579 3.7082 2.91015 3.42876 4.50318C3.35778 4.9078 3.10405 5.25703 2.74117 5.44956C1.31246 6.2076 0.742379 7.96213 1.45267 9.41517C1.63308 9.78423 1.63308 10.2159 1.45267 10.585C0.742378 12.038 1.31246 13.7925 2.74117 14.5506C3.10405 14.7431 3.35778 15.0923 3.42876 15.497C3.7082 17.09 5.20069 18.1743 6.8021 17.9478C7.20885 17.8903 7.61939 18.0237 7.91464 18.3093C9.07708 19.4339 10.9219 19.4339 12.0843 18.3093C12.3796 18.0237 12.7901 17.8903 13.1969 17.9478C14.7983 18.1743 16.2908 17.09 16.5702 15.497C16.6412 15.0923 16.8949 14.7431 17.2578 14.5506C18.6865 13.7925 19.2566 12.038 18.5463 10.585C18.3659 10.2159 18.3659 9.78423 18.5463 9.41517C19.2566 7.96213 18.6865 6.2076 17.2578 5.44956C16.8949 5.25703 16.6412 4.9078 16.5702 4.50318C16.2908 2.91015 14.7983 1.82579 13.1969 2.0523C12.7901 2.10984 12.3796 1.97644 12.0843 1.69082ZM9.07347 2.88869C9.58978 2.38921 10.4092 2.38921 10.9255 2.88869C11.5902 3.53175 12.5145 3.83207 13.4303 3.70254C14.1416 3.60193 14.8045 4.08357 14.9286 4.79114C15.0884 5.70211 15.6596 6.48836 16.4766 6.92184C17.1112 7.25853 17.3644 8.03783 17.049 8.68322C16.6428 9.51414 16.6428 10.486 17.049 11.3169C17.3644 11.9623 17.1112 12.7416 16.4766 13.0783C15.6596 13.5118 15.0884 14.298 14.9286 15.209C14.8045 15.9166 14.1416 16.3982 13.4303 16.2976C12.5145 16.1681 11.5902 16.4684 10.9255 17.1114C10.4092 17.6109 9.58978 17.6109 9.07347 17.1114C8.40874 16.4684 7.48445 16.1681 6.56869 16.2976C5.85739 16.3982 5.19448 15.9166 5.07036 15.209C4.91056 14.298 4.33932 13.5118 3.52232 13.0783C2.88773 12.7416 2.63452 11.9623 2.95001 11.3169C3.35618 10.486 3.35618 9.51414 2.95001 8.68322C2.63452 8.03783 2.88773 7.25853 3.52232 6.92184C4.33932 6.48836 4.91056 5.70211 5.07036 4.79114C5.19448 4.08357 5.85739 3.60193 6.56869 3.70254C7.48445 3.83207 8.40874 3.53175 9.07347 2.88869Z"
        fill={color}
      />
    </svg>
  );
};

export const LogoutIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.25001 3.33341C6.71024 3.33342 7.08334 2.96032 7.08334 2.50008C7.08334 2.03984 6.71024 1.66675 6.25001 1.66675H5.00001C3.15906 1.66675 1.66667 3.15913 1.66667 5.00008V15.0001C1.66667 16.841 3.15906 18.3334 5.00001 18.3334H6.25C6.71024 18.3334 7.08334 17.9603 7.08334 17.5001C7.08334 17.0398 6.71024 16.6667 6.25 16.6667H5.00001C4.07953 16.6667 3.33334 15.9206 3.33334 15.0001L3.33334 5.00008C3.33334 4.07961 4.07953 3.33341 5.00001 3.33341H6.25001Z"
        fill="white"
      />
      <path
        d="M18.9226 10.5893C19.248 10.2639 19.248 9.73626 18.9226 9.41083L15.5893 6.07749C15.2638 5.75206 14.7362 5.75206 14.4107 6.07749C14.0853 6.40293 14.0853 6.93057 14.4107 7.256L16.3215 9.16675L6.66667 9.16675C6.20643 9.16675 5.83334 9.53984 5.83334 10.0001C5.83334 10.4603 6.20643 10.8334 6.66667 10.8334L16.3215 10.8334L14.4107 12.7442C14.0853 13.0696 14.0853 13.5972 14.4107 13.9227C14.7362 14.2481 15.2638 14.2481 15.5893 13.9227L18.9226 10.5893Z"
        fill="white"
      />
    </svg>
  );
};
