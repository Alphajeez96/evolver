<template>
  <div>
    <header>
      <div class="d-flex justify-content-between contain pt-2">
        <!-- Logo here -->
        <div>
          <img src="../../assets/img/logo.png" alt="logo" />
        </div>

        <div style="width: 27%" class="mt-1">
          <div class="form-group position-relative">
            <span class="search_icon">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.8799 16.7601L14.6399 12.5201C14.2599 12.1401 13.6599 12.1401 13.2799 12.5001L11.4199 10.6601C12.2799 9.62007 12.8199 8.28007 12.8199 6.82007C12.8199 3.52007 10.1399 0.820068 6.81995 0.820068C3.49995 0.820068 0.819946 3.50007 0.819946 6.82007C0.819946 10.1401 3.49995 12.8201 6.81995 12.8201C8.25995 12.8201 9.59995 12.3001 10.6399 11.4401L12.4999 13.2801L12.4799 13.3001C12.0999 13.6801 12.0999 14.3201 12.4799 14.7001L16.7199 18.9201C17.0999 19.3001 17.7399 19.3001 18.1199 18.9201L18.8799 18.1601C19.2599 17.7601 19.2599 17.1401 18.8799 16.7601ZM1.93995 6.82007C1.93995 4.12007 4.13995 1.92007 6.83995 1.92007C9.53995 1.92007 11.7399 4.12007 11.7399 6.82007C11.7399 9.52007 9.53995 11.7201 6.83995 11.7201C4.13995 11.7201 1.93995 9.50007 1.93995 6.82007Z"
                  fill="#828282"
                />
              </svg>
            </span>
            <input
              type="search"
              class="form-controls"
              placeholder="Search for a product, category or space."
            />
          </div>
        </div>
        <div>1</div>
      </div>
      <div class="border_b"></div>
    </header>
  </div>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style scoped>
.border_b {
  border-bottom: 0.5px solid #828282;
}
::placeholder {
  color: #828282;
  font-weight: normal;
  font-size: 12px;
}
.search_icon {
  position: absolute;
  top: 8px;
  left: 10px;
}
.form-controls {
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 2rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 0.5px solid #4f4f4f;
  border-radius: 5px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.form-controls:focus {
  outline: 0;
}
</style>